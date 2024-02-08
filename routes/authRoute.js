import express from "express";
import { signup } from "../controllers/authController.js";

// init router
const router = express.Router();


// routing
router.post("/signup", signup);


// export default
export default router;