import "dotenv/config";

export const config = {
  port: 3100,
  mongoDBUrl: process.env.MONGODB_URL,
};
