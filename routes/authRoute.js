import express from "express";
import { signin, signup } from "../controllers/authController.js";

// init router
const router = express.Router();


// routing
router.post("/signup", signup);
router.post("/signin", signin);


// export default
export default router;