import User from "../models/user.model.js";

export const getUserFromSidebar=async(req,res)=>{
    try {
        const userLoggedInid=req.user._id;
        const filtersUsers=await User.find({_id:{$ne:userLoggedInid}}).select("-password");
        

        res.status(200).json(filtersUsers);
    } catch (error) {
        console.error("Error in getUserFromSidebar",error.message)
     res.status(500).json({error:"Internal Server Error"});

    }
}