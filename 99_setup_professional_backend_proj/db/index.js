// here we make a connection with the db and then export it 

import mongoose from "mongoose";
import { DB_name } from "../src/constants.js";

const connectDB=async ()=>{
    try {
        console.log(` EEEEEEEEEEEEEEEEEE ${process.env.MONGODB_URL}/${DB_name}`);

        const connection_instance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_name}`);
        console.log(" Connected with database");
        console.log(`connection instance \n ${connection_instance}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;