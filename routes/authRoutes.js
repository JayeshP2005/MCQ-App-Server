// const express = require("express");
// const authService = require("../Services/authService");

// const router = express.Router();

// // ✅ User Signup
// router.post("/signup", authService.signup);

// // ✅ User Login
// router.post("/login", authService.login);

// router.post("/forgot-password", authService.forgotPassword);

// router.post("/reset-password", authService.resetPassword);

// module.exports = router;

import express from "express";
import { signup, login, forgotPassword, resetPassword } from "../Services/authService.js";

const router = express.Router();

// ✅ User Signup
router.post("/signup", signup);

// ✅ User Login
router.post("/login", login);

// ✅ Forgot Password
router.post("/forgot-password", forgotPassword);

// ✅ Reset Password
router.post("/reset-password", resetPassword);

export default router;
