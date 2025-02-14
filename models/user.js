// const getConnA = require("../common/authCommon");

// const COLLECTION_NAME = "users";

// // ✅ Create New User
// const createUser = async (userData) => {
//     const db = await getConnA();
//     return await db.collection(COLLECTION_NAME).insertOne(userData);
// };

// // ✅ Find User By Email
// const findUserByEmail = async (email) => {
//     const db = await getConnA();
//     return await db.collection(COLLECTION_NAME).findOne({ email });
// };

// // ✅ Save OTP for Password Reset
// const saveOTP = async (email, otp, otpExpires) => {
//     const db = await getConnA();
//     return await db.collection(COLLECTION_NAME).updateOne(
//         { email },
//         { $set: { otp, otpExpires } }
//     );
// };

// // ✅ Update User Password
// const updateUserPassword = async (email, newPassword) => {
//     const db = await getConnA();
//     return await db.collection(COLLECTION_NAME).updateOne(
//         { email },
//         { $set: { password: newPassword }, $unset: { otp: "", otpExpires: "" } }
//     );
// };

// module.exports = { createUser, findUserByEmail, saveOTP, updateUserPassword };

import getConnA from "../common/authCommon.js";

const COLLECTION_NAME = "users";

// ✅ Create New User
export const createUser = async (userData) => {
    const db = await getConnA();
    return await db.collection(COLLECTION_NAME).insertOne(userData);
};

// ✅ Find User By Email
export const findUserByEmail = async (email) => {
    const db = await getConnA();
    return await db.collection(COLLECTION_NAME).findOne({ email });
};

// ✅ Save OTP for Password Reset
export const saveOTP = async (email, otp, otpExpires) => {
    const db = await getConnA();
    return await db.collection(COLLECTION_NAME).updateOne(
        { email },
        { $set: { otp, otpExpires } }
    );
};

// ✅ Update User Password
export const updateUserPassword = async (email, newPassword) => {
    const db = await getConnA();
    return await db.collection(COLLECTION_NAME).updateOne(
        { email },
        { $set: { password: newPassword }, $unset: { otp: "", otpExpires: "" } }
    );
};
