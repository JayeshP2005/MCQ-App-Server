// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var cors = require('cors')


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var stdRouter = require('./routes/Students');
// var queController = require('./pages/api/save')

// var app = express();
// app.use(cors());

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/std',stdRouter);
// app.use('/que',queController);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// import path from "path";
// import createError from "http-errors";

// import authRoutes from "./routes/authRoutes.js";
// import queRoutes from "./routes/queRoutes.js";

// const app = express();

// // ✅ Middleware
// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(cors({ origin: "*" })); // Allow frontend connection

// // ✅ Serve static files (if needed)
// app.use(express.static(path.join(process.cwd(), "public")));

// // ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/que", queRoutes);

// // ✅ Handle 404 errors
// app.use((req, res, next) => {
//   next(createError(404, "API route not found"));
// });

// // ✅ Error handling middleware
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// });

// export default app;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import path from "path";
import createError from "http-errors";

import authRoutes from "./routes/authRoutes.js";
import queRoutes from "./routes/queRoutes.js";

const app = express();

// ✅ Logger for debugging
app.use(logger("dev"));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ CORS Setup (Fix for Vercel Deployment)
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mcq-app-client.vercel.app"], // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // Allow cookies & headers
  })
);

// ✅ Additional CORS Handling (For Vercel Issues)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ✅ Serve Static Files (if needed)
app.use(express.static(path.join(process.cwd(), "public")));

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/que", queRoutes);

// ✅ 404 Route Not Found
app.use((req, res, next) => {
  next(createError(404, "API route not found"));
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;



