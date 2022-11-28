const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const express = require("express")
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express()
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const aboutRouter = require('./routes/about');
app.use('/about', aboutRouter);

app.listen(4000, () => console.log("Server is running."));
