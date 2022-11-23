const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const express = require("express")
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express()
var cors = require("cors");

//display the static "welcome" text
app.use(cors);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //used so we can access the bodies of files like new.js or index.html

app.set('view engine', 'ejs');

const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

app.listen(3001);