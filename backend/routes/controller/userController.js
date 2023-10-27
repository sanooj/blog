import { User } from "../../models/userModel.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
import "dotenv/config";

// signup API
const signup = async (req, res, next) => {
  const { name, email, password, isAdmin } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    const isAdmin = await User.findOne({ isAdmin });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    if (isAdmin) {
      return res.status(400).send({ message: "Only one admin allowed" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    const createdUser = await User.create(user);
    res.status(201).send({ message: "User created Successfully", data: createdUser });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// signin API
const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = JWT.sign(
      { email: existingUser.email, id: existingUser._id, isAdmin: existingUser.isAdmin },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "65m",
      },
    );

    res.clearCookie(`${existingUser.id}`);
    if (req?.cookies[`${existingUser.id}`]) {
      req.cookies[`${existingUser.id}`] = "";
    }

    res.cookie(existingUser.id, token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).send({ message: "User logged in Successfully", user: existingUser });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const verifyToken = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) {
    res.status(401).send({ message: "You are not authorized" });
    return;
  }

  const token = cookie.split("=")[1];
  JWT.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      res.status(401).send({ message: "You are not authorized" });
      return;
    }

    req.payload = payload;
    next();
  });
};

const refreshToken = (req, res, next) => {
  const { cookie } = req.headers;

  if (!cookie) {
    res.status(400).send({ message: "You are not authorized" });
    return;
  }
  const previousToken = cookie.split("=")[1];

  if (!previousToken) {
    res.status(400).send({ message: "You are not authorized" });
    return;
  }

  JWT.verify(previousToken, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      res.status(403).send({ message: "You are not authorized" });
      return;
    }

    res.clearCookie(`${payload.id}`);
    req.cookies[`${payload.id}`] = "";

    const token = JWT.sign(
      { email: payload.email, id: payload.id, isAdmin: payload.isAdmin },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "65m",
      },
    );

    res.cookie(payload.id, token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,
      sameSite: "lax",
    });
    req.payload = payload;
    next();
  });
};

const signOut = (req, res) => {
  const { cookie } = req.headers;
  if (!cookie) {
    res.status(401).send({ message: "Couldn't sign out" });
    return;
  }
  const token = cookie.split("=")[1];
  if (!token) {
    res.status(401).send({ message: "Couldn't sign out" });
    return;
  }

  JWT.verify(token, process.env.JWT_SECRET_KEY, (error, payload) => {
    if (error) {
      res.status(401).send({ message: "Authentication failed" });
      return;
    }

    res.clearCookie(`${payload?.id}`);
    req.cookies[`${payload?.id}`] = "";

    res.status(200).send({ message: "Signed out successfully" });
  });
};

const getUser = async (req, res, next) => {
  const { id } = req.payload;

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }
    res.status(200).send({ message: "User details fetched Successfully", user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { signup, signin, verifyToken, getUser, refreshToken, signOut };
