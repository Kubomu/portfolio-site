import React from 'react';
import { Helmet } from 'react-helmet'; 
import './Services.css'; 

const Services = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Explore the services offered by Cruise Tech Solutions, including Web Development, Software Development, and Tech Consulting." />
        <meta name="keywords" content="Services, Web Development, Software Development, Tech Consulting, Cruise Tech Solutions" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions - Our Services</title>
      </Helmet>

      <section id="services">
        <h2 className="heading">Our Services</h2>
        <div className="serviceList">
          <div className="serviceItem">
            <h3 className="serviceTitle">Web Development</h3>
            <p className="serviceDescription">
              We create beautiful and functional websites to help your business thrive online.
            </p>
          </div>
          <div className="serviceItem">
            <h3 className="serviceTitle">Software Development</h3>
            <p className="serviceDescription">
              Custom software solutions tailored to your business needs and goals.
            </p>
          </div>
          <div className="serviceItem">
            <h3 className="serviceTitle">Tech Consulting</h3>
            <p className="serviceDescription">
              Expert advice on how to leverage technology to grow your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
