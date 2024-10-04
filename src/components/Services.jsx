import React, { useState } from 'react';
import '../styles/Services.css'; 

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
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
    alert('Service request submitted successfully!');
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Services Page</h1>
        <h6>Note: Each product has a 1-year warranty & Each product has a 15-Day Return Policy from date of purchase</h6>
        <form onSubmit={handleSubmit} className="service-form">
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
            <label htmlFor="service">Service Type:</label>
            <select 
              id="service" 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a service</option>
              <option value="Return">Return</option>
              <option value="Request Repair">Request Repair</option>
              <option value="Self help">Self help</option>
              <option value="Other">Other</option>
            </select>
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

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Services;
