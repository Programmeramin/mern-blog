import express from "express";
import { test } from "../controllers/userController.js";

// init router
const router = express.Router();


// routing
router.get("/", test);


// export default
export default router;