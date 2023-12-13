import {User} from '../models/models.js';
import { connectToDB } from "./utils.js";

export const fetchUser = async () => {
  try {
    connectToDB();
    const user = await User.find();
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};