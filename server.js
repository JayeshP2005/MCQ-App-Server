// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const queRoutes = require("./routes/queRoutes");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: "*" })); // ✅ Allows frontend to connect

// // ✅ Routes
// app.use("/api/auth", authRoutes);
// console.log(1)
// app.use("/api/que", queRoutes);

// // ✅ Server Start
// const PORT = process.env.PORT;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import queRoutes from "./routes/queRoutes.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // ✅ Allows frontend to connect

// ✅ Routes
app.use("/api/auth", authRoutes);
console.log(1);
app.use("/api/que", queRoutes);

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
