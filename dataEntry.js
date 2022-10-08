var url = "mongodb://localhost:27017/";
//TODO successfully connect and print data.
// Create a new MongoClient
// Connection URI
const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb+srv://localhost%3A27017/?maxPoolSize=20&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    const findResult = await user_data.find({
      name: "James",
    });
    
    await cursor.forEach(console.dir);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);



