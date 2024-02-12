import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";


export const signup = async (req, res, next) =>{
    
    
    const {username, email, password} = req.body;

    // validataion
    if(!username || !email || !password || username === "" || email === "" || password === ''){
       next(errorHandler(400, "All fields are required"));
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
        next(error)
    }

} ;

export const signin = async(req, res, next) =>{
    const {email, password} = req.body;

    // validation
    if(!email || !password || email === "" || password === ""){
        next(errorHandler(400, "All fields are required"));
    }

         try {
            const validUser = await User.findOne({email});

            if(!validUser){
              return next(errorHandler(400, "User not found"));
            }
            const validPassword = bcryptjs.compareSync(password, validUser.password);
                 
            if(!validPassword){
                return next(errorHandler(400, "Invalid Password"));
             }
             const token = Jwt.sign(
                {id : validUser._id}, process.env.JWT_SECRET);

            const {password : pass, ...rest } = validUser._doc

                res.status(200).cookie("access_token", token, {
                    httpOnly : true })
                    .json(validUser);

         } catch (error) {
            next(error)
         }

}