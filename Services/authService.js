
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const getConnA = require("../common/authCommon");

// const SECRET_KEY = process.env.JWT_SECRET || "mysecretkey";

// // ✅ User Signup
// const signup = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         if (!username || !email || !password) return res.status(400).json({ error: "All fields are required" });

//         const db = await getConnA();
//         const collection = db.collection("users");

//         // Check if user exists
//         const existingUser = await collection.findOne({ email });
//         if (existingUser) return res.status(400).json({ error: "Email already registered" });

//         // Hash password & save user
//         const hashedPassword = await bcrypt.hash(password, 10);
//         await collection.insertOne({ username, email, password: hashedPassword });

//         res.status(201).json({ success: true, message: "Signup successful!" });
//     } catch (error) {
//         res.status(500).json({ error: "Signup failed", details: error });
//     }
// };

// // ✅ User Login
// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) return res.status(400).json({ error: "All fields are required" });

//         //console.log(req)

//         const db = await getConnA();
//         const collection = db.collection("users");
//         //console.log(db)

//         // Find user
//         const user = await collection.findOne({ email });
//         if (!user) return res.status(400).json({ error: "Invalid credentials" });

//         // Compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//         // Generate JWT token
//         const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

//         res.status(200).json({ success: true, token, user: { username: user.username, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ error: "Login failed", details: error });
//     }
// };

// module.exports = { signup, login };


// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// //const nodemailer = require("nodemailer");
// const { createUser, findUserByEmail, updateUserPassword, saveOTP } = require("../models/user");
// const { sendOTPEmail } = require("../utils/emailService");

// const SECRET_KEY = process.env.JWT_SECRET || "mysecretkey";

// // ✅ Signup User
// const signup = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         if (!username || !email || !password) return res.status(400).json({ error: "All fields are required" });

//         const existingUser = await findUserByEmail(email);
//         if (existingUser) return res.status(400).json({ error: "Email already registered" });

//         const hashedPassword = await bcrypt.hash(password, 10);
//         await createUser({ username, email, password: hashedPassword });

//         res.status(201).json({ success: true, message: "Signup successful!" });
//     } catch (error) {
//         res.status(500).json({ error: "Signup failed", details: error });
//     }
// };

// // ✅ Login User
// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) return res.status(400).json({ error: "All fields are required" });

//         const user = await findUserByEmail(email);
//         if (!user) return res.status(400).json({ error: "Invalid credentials" });

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//         const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

//         res.status(200).json({ success: true, token, user: { username: user.username, email: user.email } });
//     } catch (error) {
//         res.status(500).json({ error: "Login failed", details: error });
//     }
// };

// // ✅ Forgot Password (Send OTP)
// const forgotPassword = async (req, res) => {
//     try {
//         const { email } = req.body;
//         const user = await findUserByEmail(email);
//         if (!user) return res.status(400).json({ error: "User not found" });

//         const otp = Math.floor(100000 + Math.random() * 900000);
//         const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 min expiry

//         await saveOTP(email, otp, otpExpires);
//         await sendOTPEmail(email, otp);

//         res.json({ success: true, message: "OTP sent to email" });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to send OTP", details: error });
//     }
// };

// // ✅ Reset Password
// const resetPassword = async (req, res) => {
//     try {
//         const { email, otp, newPassword } = req.body;

//         //console.log(email,newPassword)

//         // const isValidOTP = await verifyOTP(email, otp);
//         // if (!isValidOTP) return res.status(400).json({ error: "Invalid or expired OTP" });

//         console.log(email,newPassword)

//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         await updateUserPassword(email, hashedPassword);

//         res.status(200).json({ success: true, message: "Password reset successful" });
//     } catch (error) {
//         res.status(500).json({ error: "Password reset failed", details: error });
//     }
// };

// module.exports = { signup, login, forgotPassword, resetPassword };


import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail, updateUserPassword, saveOTP } from "../models/user.js";
import sendOTPEmail from "../utils/emailService.js";

const SECRET_KEY = process.env.JWT_SECRET || "mysecretkey";

// ✅ Signup User
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) return res.status(400).json({ error: "All fields are required" });

        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({ error: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser({ username, email, password: hashedPassword });

        res.status(201).json({ success: true, message: "Signup successful!" });
    } catch (error) {
        res.status(500).json({ error: "Signup failed", details: error });
    }
};

// ✅ Login User
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ error: "All fields are required" });

        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ success: true, token, user: { username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ error: "Login failed", details: error });
    }
};

// ✅ Forgot Password (Send OTP)
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ error: "User not found" });
 
        // useEffect(() => {
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        // }, []);

        await saveOTP(email, otp, otpExpires);
        await sendOTPEmail(email, otp);

        res.json({ success: true, message: "OTP sent to email" });
    } catch (error) {
        res.status(500).json({ error: "Failed to send OTP", details: error });
    }
};

// ✅ Reset Password
export const resetPassword = async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        console.log(email, newPassword);

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await updateUserPassword(email, hashedPassword);

        res.status(200).json({ success: true, message: "Password reset successful" });
    } catch (error) {
        res.status(500).json({ error: "Password reset failed", details: error });
    }
};

