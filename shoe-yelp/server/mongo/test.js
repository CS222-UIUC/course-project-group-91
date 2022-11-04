const { user_profile_collection, closeConnection, mongo_client } = require('./db.js');
const db = require('./db.js')

async function run() {
    try {
      const valid = await db.isValidUsername('jboat', user_profile_collection);
      console.log(valid);
  
    } finally {
      // Ensures that the client will close when you finish/error
      closeConnection(mongo_client);
    }
}

run().catch(console.dir);