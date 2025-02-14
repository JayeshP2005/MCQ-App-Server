
// const queDoa=require('../doa/queDoa')

// const queService = {
//     save : async (data)=>{
//         console.log(2)
//        const res = await queDoa.save(data);
//        return res;
//     }
// };

//  module.exports=queService;

// const queDoa = require("../doa/queDoa");

// const queService = {
//     save: async (data) => {
//         console.log("Saving question...");
//         return await queDoa.save(data);
//     },

//     getAll: async () => {
//         console.log("Fetching all questions...");
//         return await queDoa.getAll();
//     },

//     checkAnswers: async (answers) => {
//         console.log("Checking answers...");
//         return await queDoa.checkAnswers(answers);
//     }
// };

// module.exports = queService;

import queDoa from "../doa/queDoa.js";

export const save = async (data) => {
    console.log("Saving question...");
    return await queDoa.save(data);
};

export const getAll = async () => {
    console.log("Fetching all questions...");
    return await queDoa.getAll();
};

export const checkAnswers = async (answers) => {
    console.log("Checking answers...");
    return await queDoa.checkAnswers(answers);
};

