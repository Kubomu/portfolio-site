import React from 'react';
import { Helmet } from 'react-helmet';
import './Services.css'; // Import the CSS file

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'We create beautiful and functional websites to help your business thrive online.',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs and goals.',
    },
    {
      title: 'Tech Consulting',
      description: 'Expert advice on how to leverage technology to grow your business.',
    },
    {
      title: 'Mobile App Development',
      description: 'Development of user-friendly mobile applications for both iOS and Android platforms.',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategies to enhance your online presence and reach your target audience effectively.',
    },
    {
      title: 'E-commerce Solutions',
      description: 'Creating comprehensive e-commerce platforms that drive sales and engage customers.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Offering scalable and secure cloud services to optimize your business operations.',
    },
    {
      title: 'Maintenance and Support',
      description: 'Ongoing support and maintenance services to ensure your systems run smoothly.',
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore the services offered by Cruise Tech Solutions, including Web Development, Software Development, and Tech Consulting." />
        <meta name="keywords" content="Services, Web Development, Software Development, Tech Consulting, Cruise Tech Solutions" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions - Our Services</title>
      </Helmet>

      <section id="services" className="services-section">
        <h2 className="heading">Our Services</h2>
        <div className="serviceList">
          {services.map((service, index) => (
            <div key={index} className="serviceItem">
              <h3 className="serviceTitle">{service.title}</h3>
              <p className="serviceDescription">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
