import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      <Helmet>
        <meta name="description" content="Header of Cruise Tech Solutions website with navigation links." />
        <meta name="keywords" content="Cruise Tech Solutions, Header, Navigation, About, Services, Portfolio, Contact" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions</title>
      </Helmet>

      <header style={headerStyle}>
        <h1 style={titleStyle}>Cruise Tech Solutions</h1>
        <nav>
          <ul style={navStyle}>
            {['About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    ...linkStyle,
                    color: hoveredLink === index ? '#4CAF50' : '#ECF0F1',
                  }}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'column', // Changed to column for mobile view
  alignItems: 'center',
  padding: '20px 10px', // Adjust padding for mobile
  backgroundColor: '#2C3E50',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  color: '#ECF0F1',
  fontSize: '24px', // Reduced size for mobile
  letterSpacing: '2px',
  margin: 0,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column', // Changed to column for mobile view
  gap: '10px', // Reduced gap for mobile
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '16px', // Reduced size for mobile
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  transition: 'color 0.3s',
};

// Media queries for responsive design
const mediaQueries = `
  @media (min-width: 600px) {
    ${headerStyle.display = 'flex'}
    ${headerStyle.flexDirection = 'row'}
    ${navStyle.flexDirection = 'row'}
    ${navStyle.gap = '30px'}
    ${titleStyle.fontSize = '28px'} // Increase font size for larger screens
    ${linkStyle.fontSize = '18px'} // Increase link font size for larger screens
    ${headerStyle.padding = '20px 40px'} // Original padding for larger screens
  }
`;

export default Header;
