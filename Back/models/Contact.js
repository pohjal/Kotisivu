const mongoose = require('mongoose');

// Define the schema for contact form submissions
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    submittedAt: {
        type: Date,
        default: Date.now, // Automatically set the current date and time
    },
});

// Create the model and specify the collection name
const Contact = mongoose.model('Contact', contactSchema, 'contactRequests');

module.exports = Contact;