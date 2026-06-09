import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();

const { ACCESS_TOKEN_SECRET } = process.env;
if (!ACCESS_TOKEN_SECRET) {
  throw new Error("ACCESS_TOKEN_SECRET is not defined");
}

export const createAccessToken = (payload: object): string => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET);
};
