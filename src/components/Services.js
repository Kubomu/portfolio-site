import React from 'react';
import './Services.css'; // Make sure the path is correct based on your file structure

const Services = () => {
  return (
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
  );
};

export default Services;
