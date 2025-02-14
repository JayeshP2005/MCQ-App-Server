// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

import express from "express";  // ✅ Use `import` instead of `require`
const router = express.Router();

// GET home page
router.get("/", (req, res) => {
  res.json({ title: "Express running with ES Modules!" }); // ✅ Use `json` instead of `render`
});

export default router;  // ✅ Use `export default` instead of `module.exports`


