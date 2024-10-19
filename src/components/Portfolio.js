import React from 'react';
import { Helmet } from 'react-helmet';
import './Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  const projects = [
    {
      title: 'Bank Systems',
      description: 'Web app for managing business workflows.',
      imageUrl: 'https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectOne.png',
      altText: 'Project 1',
    },
    {
      title: 'Point Of Sale',
      description: 'E-commerce platform for small businesses.',
      imageUrl: 'https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectTwo.png',
      altText: 'Project 2',
    },
    {
      title: 'Hotel Management Systems',
      description: 'Custom CRM software for better client relationships.',
      imageUrl: 'https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProjectThree.png',
      altText: 'Project 3',
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore our portfolio showcasing our projects including Bank Systems, Point of Sale, and Hotel Management Systems." />
        <meta name="keywords" content="Portfolio, Bank Systems, Point of Sale, Hotel Management, Cruise Tech Solutions" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions - Our Portfolio</title>
      </Helmet>

      <section id="portfolio" className="portfolio-section">
        <h2 className="portfolio-heading">Our Portfolio</h2>
        <div className="projectList">
          {projects.map((project, index) => (
            <div key={index} className="projectItem">
              <img
                src={project.imageUrl}
                alt={project.altText}
                className="imageStyle"
              />
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
