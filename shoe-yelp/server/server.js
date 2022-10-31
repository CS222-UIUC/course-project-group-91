const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const express = require("express")
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express()
//const test = require("../client/src/App.js");

//main : currently isn't called anywhere, just for testing
async function main() {
    try {
        await client.connect();
        await createListing(client, {
            name: "Example Place",
            summary: "A placeholder value to show that this works",
            bedrooms: 1,
            bathrooms: 1
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

//listDatabases : generates an array of all the databases gathered from the given uri
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

//createListing : currently, our database has nothing but sample info, one collection being
//sample AirBnB listings. This function creates an additional listing and inputs it into the collection.
//In the future, this can be used for adding users, shoes, reviews, etc.
module.exports = async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//createMultipleListings : same as createListing, but is passed an array of objects to be created
async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

//express code from here onwards, everything above will likely be removed at a later date

//display the static "welcome" text
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //used so we can access the bodies of files like new.js or index.html

app.set('view engine', 'ejs');

const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}

app.listen(5000);