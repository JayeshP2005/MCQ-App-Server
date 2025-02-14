// const nodemailer = require("nodemailer");

// const sendOTPEmail = async (email, otp) => {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: "Password Reset OTP",
//         text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
//     };

//     await transporter.sendMail(mailOptions);
// };

// module.exports = { sendOTPEmail };

import nodemailer from "nodemailer";

const sendOTPEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset OTP",
            text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent: ", info.response);
        return { success: true, message: "OTP sent successfully" };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, error: "Failed to send OTP" };
    }
};

export default sendOTPEmail;
