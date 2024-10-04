import React, { useState } from 'react';
import '../styles/Pagestyles.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or would like to raise a service request, feel free to reach out. We’re here to help!</p>

        <h2>Contact Information</h2>
        <p><strong>Email:</strong>skiranappari@gmail.com</p>
        <p><strong>Phone:</strong>9063856357</p>
        <p><strong>Address:</strong>Tower 1 Techmahindra near satyam junction Visakhapatnam.</p>

        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
