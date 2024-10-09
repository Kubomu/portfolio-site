import React from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
import './About.css'; // Ensure the path is correct based on your file structure

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Cruise Tech Solutions is a full-service tech company specializing in software development, web design, mobile app development, automated systems, and home tech solutions." />
        <meta name="keywords" content="Cruise Tech Solutions, software development, web design, mobile app development, automated systems, home tech solutions" />
        <meta name="author" content="Kubomu Edwin" />
        <title>About Cruise Tech Solutions</title>
      </Helmet>

      <section id="about">
        <h2 className="about-heading">About Cruise Tech Solutions</h2>
        <p className="about-description">
          Cruise Tech Solutions is a full-service technology company specializing in software development, website design, 
          mobile app development, automated systems, and home tech solutions. 
          Our mission is to provide innovative, efficient, and reliable technology services tailored to meet the needs of our clients.
        </p>
        <p className="about-description">
          We leverage the latest technologies to build scalable software, smart home automation systems, 
          and mobile applications that drive both personal and business growth. Whether it's creating a seamless user experience, 
          or developing complex business solutions, we are committed to turning your vision into reality.
        </p>
        
        <div className="ceo-section">
          <h3 className="ceo-heading">About the CEO</h3>
          <p className="about-description">
            Led by our visionary CEO, Kubomu Edwin, Cruise Tech Solutions is driven by a passion for cutting-edge technology. 
            With years of experience in the tech industry, Kubomu has built a reputation for delivering innovative and reliable solutions 
            that meet the evolving needs of clients across various industries.
          </p>
          <p className="about-description">
            Kubomu's leadership is grounded in a strong focus on quality and customer satisfaction, ensuring that every project is handled 
            with the utmost professionalism and expertise.
          </p>
        </div>

        <div className="additional-section">
          <h3 className="additional-heading">Our Expertise</h3>
         
          <ul className="expertise-list">
            <li className="expertise-list-item">Automated Systems: From smart home installations to enterprise automation, we help you integrate technology for convenience and efficiency.</li>
            <li className="expertise-list-item">Home Tech Solutions: We specialize in home automation, enabling seamless control of lighting, security, and entertainment systems.</li>
            <li className="expertise-list-item">Mobile App Development: We design and develop cross-platform mobile applications that provide a superior user experience for businesses and consumers.</li>
            <li className="expertise-list-item">Web Development: Our team creates responsive and dynamic websites that drive engagement and deliver results.</li>
            <li className="expertise-list-item">Tech Consulting: Our expert team helps you navigate the fast-evolving tech landscape and find the best solutions for your needs.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
