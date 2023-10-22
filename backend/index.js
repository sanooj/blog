import express from "express";
import { config } from "./config.js";
import mongoose from "mongoose";
import { apiRoutes } from "./routes/apiRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api", apiRoutes);

mongoose
  .connect(config.mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
