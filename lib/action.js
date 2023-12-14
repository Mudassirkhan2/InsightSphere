"use server"

import {User,Product} from '../models/models.js';
import { connectToDB } from "./utils.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } =Object.fromEntries(formData);
    try {
      connectToDB();
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password : hashedPassword,
        phone,
        address,
        isAdmin,
        isActive,
      });
      await newUser.save();
      
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
    revalidatePath("/users");
    redirect("/users");
  };


  export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } =Object.fromEntries(formData);
    try {
      connectToDB();
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        updateFields.password = hashedPassword;
      }
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
      await User.findByIdAndUpdate(id, updateFields);



    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
    revalidatePath("/users");
    redirect("/users");
  };

  export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);
  
    try {
      connectToDB();
  
      const newProduct = new Product({
        title,
        desc,
        price,
        stock,
        color,
        size,
      });
  
      await newProduct.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create product!");
    }
    revalidatePath("/products");
    redirect("/products");
  };
  export const updateProduct = async (formData) => {
    const { 
      id, 
      title,
      desc,
      price,
      stock,
      color,
      size, 
    } =Object.fromEntries(formData);
    try {
      connectToDB();
      const updateFields = {
        title,
        desc,
        price,
        stock,
        color,
        size,
      };
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        updateFields.password = hashedPassword;
      }
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
      await Product.findByIdAndUpdate(id, updateFields);

    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
    revalidatePath("/products");
    redirect("/products");
  };
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try {
      connectToDB();
      await User.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete product!");
    }
    revalidatePath("/users");
  };
export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/products");
};