// var mongodb = require('mongodb')
// const getConn = async ()=>{
//     const mongoClient = mongodb.MongoClient
//            const mongoServer = await mongoClient.connect(process.env.DB_URL)
//            console.log("✅ Connected to MongoDB");
//            const db = mongoServer.db('onlinetest')
//            //const collection = db.collection('questions')
//            return db
// }

//  module.exports=getConn

import { MongoClient } from 'mongodb';

const getConn = async () => {
    const mongoServer = await MongoClient.connect(process.env.DB_URL);
    console.log("✅ Connected to MongoDB");
    const db = mongoServer.db('onlinetest');
    // const collection = db.collection('questions');
    return db;
};

export default getConn;


// "scripts": {
//     "start": "node ./bin/www"

//   },