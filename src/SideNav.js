import React, { useState } from 'react';
import './SideNav.css';
import { Nav, Image, Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from './pro.jpg'; 

const SideNav = () => {
  const [open, setOpen] = useState(true); 

  return (
    <>
      {/* Toggle Button */}
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="sidebar"
        aria-expanded={open}
        variant="primary"
        style={{
          position: 'fixed',
          top: '20px',
          left: open ? '250px' : '10px', 
          zIndex: '1000',
          transition: 'left 0.3s ease',
          marginBottom: '10px',
        }}
      >
        {open ? '<' : '>'} {/* Toggle icons */}
      </Button>

      {/* Collapsible Sidebar */}
      <Collapse in={open}>
        <div
          id="sidebar"
          style={{
            height: '100vh',
            width: open ? '250px' : '0',
            transition: 'width 0.3s ease',
            overflow: 'hidden',
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid #ddd',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '999',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Profile Picture */}
          <Image
            src={profilePic}
            roundedCircle
            style={{
              width: '100px',
              height: '100px',
              marginBottom: '20px',
              transition: 'opacity 0.3s ease',
              opacity: open ? 1 : 0, 
            }}
          />

          {/* Navigation Links */}
            <Nav className="flex-column" style={{ width: '100%', textAlign: 'center' }}>
            <Nav.Link as={Link} to="/about" className="sidenav-link">About</Nav.Link><br />
            <Nav.Link as={Link} to="/" className="sidenav-link">Home</Nav.Link><br />
            <Nav.Link as={Link} to="/Products" className="sidenav-link">Products</Nav.Link><br />
            <Nav.Link as={Link} to="/Cart" className="sidenav-link">Cart</Nav.Link><br />
            <Nav.Link as={Link} to="/services" className="sidenav-link">Services</Nav.Link><br />
            <Nav.Link as={Link} to="/contact" className="sidenav-link">Contact</Nav.Link><br />
            <Nav.Link as={Link} to="/Logout" className="sidenav-link">Logout</Nav.Link>
          </Nav>
        </div>
      </Collapse>
    </>
  );
};

export default SideNav;
