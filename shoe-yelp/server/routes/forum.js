//routing for the forum page

const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const router = express.Router();
var newList = require('../server.js');

router
    .route('/')
    .get((req, res) => {
    //get request
    })
    .put((req, res) => {
    //put request
    }).delete((req, res) => {
    //delete request
    });