// const getConn = require("../common/queCommon");

// const queDoa = {
//     save : async (data)=>{
//         try{
//        const db = await getConn()
//        const collection = db.collection("questions");
//        const res = await collection.insertOne(data) 
//         return res;
//         }catch(e){
//             return e;
//         }
//     }
// }

// module.exports=queDoa

// const getConn = require("../common/queCommon");
// const { ObjectId } = require("mongodb");

// const queDoa = {
//     save: async (data) => {
//         try {
//             const db = await getConn();
//             const collection = db.collection("questions");
//             const res = await collection.insertOne(data);
//             return res;
//         } catch (e) {
//             console.error("Error saving question:", e);
//             return { error: e.message };
//         }
//     },

//     getAll: async () => {
//         try {
//             const db = await getConn();
//             const collection = db.collection("questions");
//             const questions = await collection.find().toArray();
//             return questions;
//         } catch (e) {
//             console.error("Error fetching questions:", e);
//             return { error: e.message };
//         }
//     },

//     checkAnswers: async (answers) => {
//         try {
//             const db = await getConn();
//             const collection = db.collection("questions");
//             const questions = await collection.find().toArray();

//             console.log("Answers Object:", answers);
//             console.log("Questions Array:", questions);


//         let score = 0;

//         questions.forEach((q) => {
//             let correctAnswer = q[`opt${q.ans}`]; // Get the correct answer text
//             let userAnswer = answers[q._id.toString()]; // Ensure correct key type

//             console.log(`QID: ${q._id}`);
//             console.log(`User Answer: ${userAnswer}`);
//             console.log(`Correct Answer: ${correctAnswer}`);

//         if (userAnswer === correctAnswer) {
//             console.log("✅ Correct Answer! Increasing score...");
//             score++;
//         } else {
//             console.log("❌ Wrong Answer!");
//     }
// });
//         console.log("Final Score:", score);
//         return { score, total: questions.length };
//         } catch (e) {
//             console.error("Error processing answers:", e);
//             return { error: e.message };
//         }
//     }
// };

// module.exports = queDoa;

import getConn from "../common/queCommon.js";
import { ObjectId } from "mongodb";

const queDoa = {
    save: async (data) => {
        try {
            const db = await getConn();
            const collection = db.collection("questions");
            const res = await collection.insertOne(data);
            return res;
        } catch (e) {
            console.error("Error saving question:", e);
            return { error: e.message };
        }
    },

    getAll: async () => {
        try {
            const db = await getConn();
            const collection = db.collection("questions");
            const questions = await collection.find().toArray();
            return questions;
        } catch (e) {
            console.error("Error fetching questions:", e);
            return { error: e.message };
        }
    },

    checkAnswers: async (answers) => {
        try {
            const db = await getConn();
            const collection = db.collection("questions");
            const questions = await collection.find().toArray();

            console.log("Answers Object:", answers);
            console.log("Questions Array:", questions);

            let score = 0;

            questions.forEach((q) => {
                let correctAnswer = q[`opt${q.ans}`]; // Get the correct answer text
                let userAnswer = answers[q._id.toString()]; // Ensure correct key type

                console.log(`QID: ${q._id}`);
                console.log(`User Answer: ${userAnswer}`);
                console.log(`Correct Answer: ${correctAnswer}`);

                if (userAnswer === correctAnswer) {
                    console.log("✅ Correct Answer! Increasing score...");
                    score++;
                } else {
                    console.log("❌ Wrong Answer!");
                }
            });

            console.log("Final Score:", score);
            return { score, total: questions.length };
        } catch (e) {
            console.error("Error processing answers:", e);
            return { error: e.message };
        }
    }
};

export default queDoa;
