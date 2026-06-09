import { Request, Response } from "express";
import User from "../models/User";

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user!._id).select("-password");
    res
      .status(200)
      .json({ user, status: true, msg: "Profile found successfully.." });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ status: false, msg: "Internal Server Error" });
  }
};
