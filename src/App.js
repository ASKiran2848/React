import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './SideNav';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Logout';
import Products from './components/ProductList'; 
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation'; // Import the new component

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]); // Ensure each product has a quantity
  };

  const onAdd = (product) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const onRemove = (product) => {
    const updatedCart = cart
      .map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0); // Remove item if quantity is 0
    setCart(updatedCart);
  };

  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={2} className="p-0">
            <SideNav />
          </Col>
          <Col xs={10} className="p-3">
            <Routes>
              <Route path="/React" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/logout" element={<Login />} />
              <Route path="/products" element={<Products addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} /> {/* New Route */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
