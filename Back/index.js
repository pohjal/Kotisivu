const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module
const { connectToMongoDB, client } = require('./db'); // Import MongoDB connection logic

require('dotenv').config(); // Load environment variables

// Initialize the app
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests that don't match the backend routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a port
const PORT = process.env.PORT || 3000;

let db; // Variable to hold the database instance

// Connect to MongoDB and set the database instance
(async () => {
    try {
        db = await connectToMongoDB();
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if the database connection fails
    }
})();

// Basic route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to Kotisivu!');
});

// POST route to handle contact form submissions
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    try {
        // Insert the contact form submission into the `contactRequests` collection
        const result = await db.collection('contactRequests').insertOne({
            name,
            email,
            message,
            submittedAt: new Date(),
        });
        console.log('New Contacts:', req.body);
        console.log('Contact request saved to database:', result.insertedId);

        res.status(200).json({ message: 'Thank you for your message! We will get back to you soon.' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Failed to save your message. Please try again later.' });
    }
});

// Gracefully close MongoDB connection on server stop
process.on('SIGINT', async () => {
    console.log('Closing MongoDB connection...');
    await client.close();
    process.exit(0);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});