import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";
import connectToMongoDb from "./db/connectTomongoDb.js";
import cookieParser from "cookie-parser";
const app=express();

dotenv.config();

app.use(express.json()) //to parse the incoming REQUEST WITH json payloads (From req.body)
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes);       
app.use("/api/messages",messageRoutes);
app.use("/api/use",userRoutes);

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server Running on Port ${PORT}`);
})