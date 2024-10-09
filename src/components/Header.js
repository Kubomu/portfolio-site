import React, { useState } from 'react';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
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
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 40px',
  backgroundColor: '#2C3E50',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  color: '#ECF0F1',
  fontSize: '28px',
  letterSpacing: '2px',
  margin: 0,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  gap: '30px',
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '18px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  transition: 'color 0.3s',
};

export default Header;
