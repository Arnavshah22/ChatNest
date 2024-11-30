import mongoose from "mongoose"

const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected To Database");
    } catch (error) {
        console.log("Error while connecting Database",error);
    }
}
export default connectToMongoDb;
