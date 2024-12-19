import React, { useState } from 'react';
import './ContactForm.css';

// Debugging Environment Variables
console.log('Environment Variables:', import.meta.env);
console.log('API URL:', import.meta.env.VITE_API_URL);

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dynamically use API URL from environment variables
        const API_URL = import.meta.env.VITE_API_URL || 'https://kotisivu.fly.dev'; // Fallback to production URL
        console.log('Submitting to API URL:', API_URL);

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setResponseMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setResponseMessage('Error: Unable to send your message. Please try again.');
            console.error('Error:', error); // Debugging
        }
    };

    return (
        <div className="formContainer">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Message:
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;