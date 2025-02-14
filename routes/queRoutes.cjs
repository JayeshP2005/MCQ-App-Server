// const express = require("express");
// const queService = require("../Services/queServices");

// const router = express.Router();

// // ✅ Route to save question
// router.post("/save", async (req, res) => {
//     try {
//         const data = req.body.data;
//         if (!data) return res.status(400).json({ error: "No data received" });

//         const result = await queService.save(data);
//         console.log(result)
//         res.json({ success: true, acknowledged: result.acknowledged, insertedId: result.insertedId });
//         //res.send(result);
//     } catch (error) {
//         console.error("Error saving question:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;



// const express = require("express");
// const queService = require("../Services/queServices");

// const router = express.Router();

// // ✅ Save a new question
// router.post("/save", async (req, res) => {
//     try {
//         const data = req.body.data;
//         if (!data) return res.status(400).json({ error: "No data received" });

//         const result = await queService.save(data);
//         res.json({ success: true, acknowledged: result.acknowledged, insertedId: result.insertedId });
//     } catch (error) {
//         console.error("Error saving question:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // ✅ Get all questions
// router.get("/get", async (req, res) => {
//     try {
//         const questions = await queService.getAll();
//         res.json(questions);
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// // ✅ Submit test and get result
// router.post("/submit", async (req, res) => {
//     try {
//         const { answers } = req.body;
//         const result = await queService.checkAnswers(answers);
//         res.json(result);
//     } catch (error) {
//         console.error("Error processing results:", error);
//         res.status(500).json({ error: "Server error" });
//     }
// });

// module.exports = router;

import express from "express";
import { save, getAll, checkAnswers } from "../Services/queServices.js";

const router = express.Router();

// ✅ Save a new question
router.post("/save", async (req, res) => {
    try {
        const data = req.body.data;
        if (!data) return res.status(400).json({ error: "No data received" });

        const result = await save(data);
        res.json({ success: true, acknowledged: result.acknowledged, insertedId: result.insertedId });
    } catch (error) {
        console.error("Error saving question:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ Get all questions
router.get("/get", async (req, res) => {
    try {
        const questions = await getAll();
        res.json(questions);
    } catch (error) {
        console.error("Error fetching questions:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// ✅ Submit test and get result
router.post("/submit", async (req, res) => {
    try {
        const { answers } = req.body;
        const result = await checkAnswers(answers);
        res.json(result);
    } catch (error) {
        console.error("Error processing results:", error);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
