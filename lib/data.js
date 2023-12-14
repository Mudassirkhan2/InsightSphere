import {User,Product} from '../models/models.js';
import { connectToDB } from "./utils.js";

export const fetchUsers = async (q,page) => {
 // Create a new RegExp object for a case-insensitive search
  // The "i" flag is for case-insensitive search
  // This regex will be used to match the username in the database
  const regex = new RegExp(q, "i");
  // The number of items per page
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
export const fetchUser = async (id) => {
    try{
      connectToDB();
      const user = await User.findById(id);
      return user;
    
   } catch (err) {
     console.log(err);
     throw new Error("Failed to fetch user!");
   }
 };

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};
export const fetchProduct = async (id) => {
  try{
    connectToDB();
    const user = await Product.findById(id);
    return user;
  
 } catch (err) {
   console.log(err);
   throw new Error("Failed to fetch user!");
 }
};