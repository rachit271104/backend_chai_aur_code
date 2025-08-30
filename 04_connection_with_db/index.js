//making connection 
import dotenv from "dotenv";
dotenv.config({
    path:"./env",
})
import mongoose from "mongoose";
import { DB_name } from './constants.js';
import connectDB from "../db/index.js";  // 



connectDB();




// async function main() {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
//     console.log(" Connected with database");

//   } catch (err) {
//     console.error(" Database connection failed:", err.message);
//     process.exit(1); // Exit the app if DB connection fails
//   }
// }

// main();  //calling the main function