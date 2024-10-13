import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Contact information and social media links for Cruise Tech Solutions." />
        <meta name="keywords" content="Footer, Contact, Social Media, Cruise Tech Solutions, Quick Links" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions</title>
      </Helmet>

      <footer>
        <div className="container">
          <div className="contact">
            <h3>Contact Us</h3>
            <p>Email: Kubomuedwin@gmail.com</p>
            <p>Phone: +256 753 422 056</p>
          </div>
          <div className="social">
            <h3>Follow Us</h3>
            <a href="https://x.com/KubomuEdi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className="icon" />
            </a>
            <a href="https://github.com/Kubomu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Cruise Tech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
