const { user_profile_collection, closeConnection, mongo_client } = require('./db.js');
const db = require('./db.js')

/**
 * Checks if jboat is a username in user_profile_collection and gets the password for that user.
 */
async function run() {
    try {
      const valid = await db.isValidUsername('jboat', user_profile_collection);
      console.log(valid);
        
      const pass = await db.getPassword('jboat', user_profile_collection);
      console.log(pass);

    } finally {
      // Ensures that the client will close when you finish/error
      closeConnection(mongo_client);
    }
}

run().catch(console.dir);