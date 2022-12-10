//routing for the post page

const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const router = express.Router();
var newList = require('../server.js');

//The Read route will be used when the /listings path on a GET method is called.
// This section will help you get a list of all the documents.
router.route("/forum/post").get(async function (req, res) {
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("user_data")
      .find({}).limit(10) // se a collection.find() to query our user_data collection for the first 50 available listings:
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result); // returns as API response
        }
      });
  });
  router.route("/forum/post").post((req, res) => {
    // post request
    const dbConnect = dbo.getDb();
    const postDocument = {
      post_id: req.body.id,
      last_modified: new Date(),
      name: req.body.name,
      brand: req.body.brand,
      description: req.body.description,
      img_path: req.body.img,
    };
  
    dbConnect
      .collection("posts")
      .insertOne(matchDocument, function (err, result) {
        if (err) {
          res.status(400).send("Error inserting matches!");
        } else {
          console.log(`Added a new match with id ${result.insertedId}`);
          res.status(204).send();
        }
      });
    });