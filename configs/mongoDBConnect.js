import mongoose from "mongoose";

// config mongodb

const mongodbConnect = async () =>{
    mongoose.connect(process.env.MONGODB)
        
    .then(
        () => {
        console.log(`Mongodb is Connected`.bgGreen.white)})
        .catch(() =>{
            console.log(`MongoDB Connection failed`.bgRed.white);
        });
     
};

// export default
export default mongodbConnect;