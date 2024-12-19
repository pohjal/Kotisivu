const { MongoClient } = require('mongodb');
require('dotenv').config(); // For environment variables

// MongoDB URI
const uri = process.env.MONGO_URI;

// Create a MongoClient instance
const client = new MongoClient(uri);

// Function to connect to MongoDB and use the `kotisivu` database
async function connectToMongoDB() {
    try {
        await client.connect(); // Establish connection
        console.log('Connected to MongoDB!');
        return client.db('yhteydenotot'); // Use the `kotisivu` database
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit if connection fails
    }
}

module.exports = { connectToMongoDB, client };