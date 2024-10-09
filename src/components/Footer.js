import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Contact information and social media links for Cruise Tech Solutions." />
        <meta name="keywords" content="Footer, Contact, Social Media, Cruise Tech Solutions, Quick Links" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions</title>
      </Helmet>

      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div style={contactStyle}>
            <h3>Contact Us</h3>
            <p>Email: Kubomuedwin@gmail.com</p>
            <p>Phone: +256 788 150 981</p>
          </div>
          <div style={socialStyle}>
            <h3>Follow Us</h3>
            <a href="https://x.com/KubomuEdi" style={linkStyle} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} style={iconStyle} />
              Twitter
            </a>
            <a href="https://github.com/Kubomu" style={linkStyle} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
              GitHub
            </a>
          </div>
          <div style={linksStyle}>
            <h3>Quick Links</h3>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#portfolio" style={linkStyle}>Portfolio</a>
            <a href="#contact" style={linkStyle}>Contact</a>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p>&copy; {new Date().getFullYear()} Cruise Tech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

const footerStyle = {
  backgroundColor: '#2C3E50',
  color: '#ECF0F1',
  padding: '20px 0',
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
  flexWrap: 'wrap',
};

const contactStyle = {
  margin: '10px 20px',
};

const socialStyle = {
  margin: '10px 20px',
};

const linksStyle = {
  margin: '10px 20px',
};

const linkStyle = {
  color: '#ECF0F1',
  textDecoration: 'none',
  margin: '5px 0',
  display: 'block',
  transition: 'color 0.3s',
};

const copyrightStyle = {
  marginTop: '20px',
  fontSize: '14px',
};

const iconStyle = {
  marginRight: '8px', // Space between icon and text
  fontSize: '20px', // Adjust icon size if needed
};

export default Footer;
