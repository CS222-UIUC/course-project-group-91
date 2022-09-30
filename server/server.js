const {MongoClient, ReturnDocument, MongoDBNamespace} = require('mongodb');
const http = require('http');
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

//main : currently isn't called anywhere, will be useful later
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
async function createListing(client, newListing) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId}`);
}

//createMultipleListings : same as createListing, but is passed an array of objects to be created
async function createMultipleListings(client, newListings) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);

    console.log(`${result.insertedCount} new listing(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

//server creation : currently displays the names of all database collections on the main page
//messy and not how actual data will be communicated to the server, just a proof of concept
const server = http.createServer(async (req, res) => {
    await client.connect();
    databasesList = await client.db().admin().listDatabases();
    if (req.url == '/') {
        databasesList.databases.forEach(db => res.write(` - ${db.name}`));
        res.end();
    }
});


server.listen(3000);
console.log('Listening on port 3000...')
main().catch(console.error);