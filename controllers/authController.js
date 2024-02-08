import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) =>{
   
   
    const {username, email, password} = req.body;

    // validataion
    if(!username || !email || !password || username === "" || email === "" || password === ''){
        return res.status
        (400).json({message : "All fields are required"});
    }

    // hash pass
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hashPassword,
    });

    try {
        await newUser.save();
        res.json({message : "Signup successful"})
    } catch (error) {
        return res.status(404).json({message : `${error.message}`})
    }

} 