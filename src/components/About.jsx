import React from 'react';
import '../styles/About.css'; 
import { useNavigate } from 'react-router-dom'; // React Router v6 hook for navigation

const About = () => {
  // Ensure that the function is declared inside the component
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleContactClick = () => {
    navigate('/Products'); // Navigate to the Contact page
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About Us</h1>
        <p>
          Welcome to ELITE GADGETS, your go-to destination for top-quality electronics. We specialize in offering the latest models of air conditioners, televisions, laptops, and smartphones from trusted brands. Our shop is committed to providing affordable prices, exceptional customer service, and a wide variety of products that meet your tech needs.
        </p>
        <p>
        If you have any questions or would like to raise a service request,<a href="/contact"> feel free to reach out.</a> We’re here to help!
        </p>
        <button onClick={handleContactClick} className="shop-button">Shop Now</button>
      </div>
    </div>
  );
};

export default About;
