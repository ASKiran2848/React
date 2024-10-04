import React, { useState } from 'react';
import '../styles/product.css'; 
import Image1 from '../assets/images/ac1.jpeg'; 
import Image2 from '../assets/images/ac2.jpeg';
import Image3 from '../assets/images/ac3.jpeg';
import Image4 from '../assets/images/ac4.jpeg';
import Image5 from '../assets/images/SSTV.jpeg';
import Image6 from '../assets/images/LGTV.jpeg';
import Image7 from '../assets/images/STV.jpeg';
import Image8 from '../assets/images/MITV.jpeg';
import Image9 from '../assets/images/IP.jpeg';
import Image10 from '../assets/images/1+.jpeg';
import Image11 from '../assets/images/DL.jpeg';
import Image12 from '../assets/images/HP.jpeg';

const products = [
  { id: 1, name: 'LG 1.5 Ton AC', price: 75000, description: 'Inverter Split AC with Smart Wi-Fi.', image: Image1 },
  { id: 2, name: 'Samsung 2 Ton AC', price: 70000, description: 'Split AC with Digital Inverter Technology.', image: Image2 },
  { id: 3, name: 'Daikin 1 Ton AC', price: 65000, description: 'Energy-efficient AC.', image: Image3 },
  { id: 4, name: 'LG 2 Ton AC', price: 60000, description: 'Cassette AC For Office use.', image: Image4 },
  { id: 5, name: 'SAMSUNG TV', price: 55000, description: 'Wondertainment Series HD LED Smart TV.', image: Image5 },
  { id: 6, name: 'LG TV', price: 50000, description: 'Buy latest LED TVs online at cheapest prices.', image: Image6 },
  { id: 7, name: 'Sony TV', price: 45000, description: 'LED 4K Ultra HD TV.', image: Image7 },
  { id: 8, name: 'MI TV', price: 40000, description: 'TV With more features.', image: Image8 },
  { id: 9, name: 'Iphone', price: 100000, description: 'New Iphone 16', image: Image9 },
  { id: 10, name: '1+ Phone', price: 80000, description: '1+ Never settle', image: Image10 },
  { id: 11, name: 'Dell Laptop', price: 80000, description: 'DELL Inspiron 15 3520 Intel Core i5', image: Image11 },
  { id: 12, name: 'HP Laptop', price: 80000, description: 'HP Intel Intel Core i3 10th Gen', image: Image12 },
];

const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState('');

  const enlargeProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeEnlargedView = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`Added ${product.name} to cart!`);
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <h6>Click on image to enlarge product.</h6>
      {message && <div className="alert alert-success">{message}</div>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
              onClick={() => enlargeProduct(product)} 
            />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Enlarged product view */}
      {selectedProduct && (
        <div className="enlarged-view" onClick={closeEnlargedView}>
          <div className="enlarged-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="enlarged-image" />
            <p>{selectedProduct.description}</p>
            <p>Price: ₹{selectedProduct.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button><br></br>
            <button className="close-button" onClick={closeEnlargedView}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
