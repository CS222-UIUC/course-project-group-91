const { user_profile_collection, closeConnection, mongo_client, login } = require('./db.js');
const db = require('./db.js')

/**
 * Checks if jboat is a username in user_profile_collection and gets the password for that user.
 */
async function run() {
    try {
    const success = await login('jboat', 'password1', user_profile_collection);
    if(success){
        console.log("success");
    }
    console.log(success);

    const incorrect = await login('jboat', 'not right', user_profile_collection);
    console.log(incorrect);
    

    const invalid =  await login('invalid', 'not right', user_profile_collection);
    console.log(invalid);

    const pass = await db.getPassword('jboat', user_profile_collection);
    console.log(pass);

    } finally {
      // Ensures that the client will close when you finish/error
      closeConnection(mongo_client);
    }
}

run().catch(console.dir);