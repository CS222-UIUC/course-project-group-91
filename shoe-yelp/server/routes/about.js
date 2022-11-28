//routing for the about page

const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const router = express.Router();
//const database = require('../mongo/db');

router
    .route('/')
    .get((req, res) => {
        res.json({
            name: "Dylan",
            age: "19"
        });
    });

module.exports = router;