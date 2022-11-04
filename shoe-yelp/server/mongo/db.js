// Create a new MongoClient
// Connection URI
const { MongoClient } = require('mongodb')

// Connection string
const uri = "mongodb+srv://Dylan:MongoDB123@cluster0.0fwkwj3.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db('shoe_yelp');
const user_data = database.collection('user_data2');

async function run() {
  try {

    const query = { name: 'James' };
    const user = await user_data.findOne(query);
    console.log(user);

    const id = await getObjectID('jboat', user_data);
    console.log(id);

    const valid = await isValidUsername('jboat', user_data);
    console.log(valid);

    const invalid = await isValidUsername('not a valid', user_data);
    console.log(invalid);

    const james = await getName('jboat', user_data);
    console.log(james);

    //const favorite = await getFavoriteStyle('jboat', user_data);
    //console.log(favorite);
    const pass = await getPassword('jboat', user_data);
    console.log(pass);
    //const profile = await getProfilePicture('jboat', user_data);
    //console.log(profile);

  } finally {
    // Ensures that the client will close when you finish/error
    closeConnection(client);
  }
}

async function closeConnection(client_) {
  await client_.close();
}

/** 
 * Input username and user_data2 collection and outputs
*/
async function getObjectID(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    id = doc._id;
    return id;
  } catch(err) {
    console.log(err);
  }
}

/** 
 * Returns true if the username belongs to a user in the dataset and false otherwise.
*/
async function isValidUsername(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    return !(doc == null);
  } catch(err) {
    console.log(err);
  }
}

async function getName(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    val = doc.name;
    return val;
  } catch(err) {
    console.log(err);
  }
}

// need to change datamembers to not include a dash in DB.

async function getFavoriteStyle(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    val = doc.favorite-style;
    return val;
  } catch(err) {
    console.log(err);
  }
}

async function getPassword(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    val = doc.password;
    return val;
  } catch(err) {
    console.log(err);
  }
}

// need to change datamembers to not include a dash in DB.
async function getProfilePicture(user, collection) {
  try {
    const query = {username:user};

    //Retrieves user data for a given query
    const doc = await collection.findOne(query);
    val = doc.profile-picture;
    return val;
  } catch(err) {
    console.log(err);
  }
}

//run().catch(console.dir);


module.exports = {
  isValidUsername: isValidUsername,
  getPassword: getPassword,
  closeConnection: closeConnection,
  user_profile_collection: user_data,
  mongo_client: client,
};