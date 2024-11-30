import express from "express";
import protectedRoute from "../middleware/protectedRoute.js";
import { getUserFromSidebar } from "../controllers/user.controller.js";

const router=express.Router();

router.get("/",protectedRoute,getUserFromSidebar);


export default router;

