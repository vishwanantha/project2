import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

try{
    mongoose.connect(`${process.env.MONGO_URL}/${process.env.NAME}`)
        console.log("mongoose conncted")
}

catch (error) {
    console.log(error);
}

        
export default mongoose