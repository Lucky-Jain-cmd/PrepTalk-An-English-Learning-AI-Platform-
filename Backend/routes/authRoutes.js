import * as AuthController from "../controllers/authController.js";
console.log("Exports from authController:", Object.keys(AuthController));

const { registerUser, loginUser } = AuthController;

import express from "express";
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/test", (req, res) => res.send("Auth routes connected!"));

export default router;
