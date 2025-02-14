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

// ✅ CORS Configuration (Fixes Vercel Deployment Issue)
app.use(
  cors({
    origin: ["https://mcq-app-ui.vercel.app", "http://localhost:3000"], // ✅ Allow frontend URLs
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allowed headers
    credentials: true, // ✅ Allow cookies & tokens
  })
);

// ✅ Handle Preflight Requests (Important for Vercel)
app.options("*", cors());

// ✅ Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ✅ Serve static files (if needed)
app.use(express.static(path.join(process.cwd(), "public")));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/que", queRoutes);

// ✅ Handle 404 errors
app.use((req, res, next) => {
  next(createError(404, "API route not found"));
});

// ✅ Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;




