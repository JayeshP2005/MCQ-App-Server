// var mongodb = require('mongodb')
// const getConnA = async ()=>{
//     const mongoClient = mongodb.MongoClient
//            const mongoServer = await mongoClient.connect(process.env.DB_URL)
//            console.log("✅ Connected to MongoDB");
//            const db = mongoServer.db('onlinetest')
//         //    const collection = db.collection('users')
//            return db;
// }

//  module.exports=getConnA

import { MongoClient } from 'mongodb';

const getConnA = async () => {
    const mongoServer = await MongoClient.connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");
    const db = mongoServer.db('onlinetest');
    // const collection = db.collection('users');
    return db;
};

export default getConnA;
