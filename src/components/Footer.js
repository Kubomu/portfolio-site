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
            <h3 style={headerStyle}>Contact Us</h3>
            <p>Email: Kubomuedwin@gmail.com</p>
            <p>Phone: +256 788 150 981</p>
          </div>
          <div style={socialStyle}>
            <h3 style={headerStyle}>Follow Us</h3>
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
            <h3 style={headerStyle}>Quick Links</h3>
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
  padding: '10px 0', // Reduced padding
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
  margin: '5px 10px', // Reduced margin
};

const socialStyle = {
  margin: '5px 10px', // Reduced margin
};

const linksStyle = {
  margin: '5px 10px', // Reduced margin
};

const headerStyle = {
  fontSize: '16px', // Reduced header font size
};

const linkStyle = {
  color: '#ECF0F1',
  textDecoration: 'none',
  margin: '3px 0', // Reduced margin
  display: 'block',
  transition: 'color 0.3s',
  fontSize: '14px', // Reduced font size for links
};

const copyrightStyle = {
  marginTop: '10px', // Reduced margin
  fontSize: '12px', // Reduced font size
};

const iconStyle = {
  marginRight: '5px', // Space between icon and text
  fontSize: '18px', // Adjust icon size if needed
};

// Media queries for responsive design
const mediaQueries = `@media (max-width: 600px) {
    ${containerStyle.display = 'flex'}
    ${containerStyle.flexDirection = 'column'}
    ${containerStyle.alignItems = 'center'}
    ${contactStyle.margin = '5px 0'}
    ${socialStyle.margin = '5px 0'}
    ${linksStyle.margin = '5px 0'}
    ${linkStyle.fontSize = '14px'} // Adjust font size for mobile
    ${copyrightStyle.fontSize = '10px'} // Adjust copyright font size for mobile
}`;

export default Footer;
