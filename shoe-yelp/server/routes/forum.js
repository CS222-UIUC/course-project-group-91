//routing for the forum page

const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const express = require('express');
const router = express.Router();
var newList = require('../server.js');

router.route("/forum").post((req, res) => {
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

  router.route("/forum/newPost").post((req, res) => {
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
