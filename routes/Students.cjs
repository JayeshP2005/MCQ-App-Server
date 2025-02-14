// var express = require('express')
// var router = express.Router();

// router.get("/get",(req,res,next)=>{
//     console.log("executed")
//     res.send("success")
// });

// router.post("/query-post",(req,res,next)=>{
//    const n = req.query.name
//    const l = req.query.loc
//     res.send(`My name is ${n} and my location is ${l}`)
// });

// router.post("/body-post",(req,res,next)=>{
//     const n = req.body.name
//     const l = req.body.loc
//      res.send(`My name is ${n} and my location is ${l}`)
//  });

// router.put("/put/:n/:l",(req,res,next)=>{
//     const n = req.params.n
//     const l = req.params.l
//     res.send(`My name is ${n} and my location is ${l}`)
// });
// router.delete("/del",(req,res,next)=>{
//     const n = req.headers.name
//     const l = req.headers.loc
//     res.send(`My name is ${n} and my location is ${l}`)
// });

// module.exports=router;