// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

import express from "express";  // ✅ Use `import` instead of `require`

const router = express.Router();

// GET users listing
router.get("/", (req, res) => {
  res.send("Respond with a resource");
});

export default router;  // ✅ Use `export default` instead of `module.exports`



