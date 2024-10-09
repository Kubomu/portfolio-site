import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Header.css'; // Import the CSS file

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

      <header>
        <h1>Cruise Tech Solutions</h1>
        <nav>
          <ul>
            {['About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
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

export default Header;
