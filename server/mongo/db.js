// Create a new MongoClient
// Connection URI
const { MongoClient } = require('mongodb')

// Replace the uri string with your connection string.
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('shoe_yelp');
    const user_data = database.collection('user_data');

    const query = { name: 'James' };
    const user = await user_data.findOne(query);
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
