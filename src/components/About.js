import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHome, faMobileAlt, faLaptopCode, faComments } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Cruise Tech Solutions is a full-service tech company specializing in software development, web design, mobile app development, automated systems, and home tech solutions."
        />
        <meta
          name="keywords"
          content="Cruise Tech Solutions, software development, web design, mobile app development, automated systems, home tech solutions"
        />
        <meta name="author" content="Kubomu Edwin" />
        <title>About Cruise Tech Solutions</title>
      </Helmet>

      <section id="about">
        <h2 className="about-heading centered-heading">About Cruise Tech Solutions</h2>
        <p className="about-description">
          Cruise Tech Solutions is a full-service technology company specializing in software development, website design, mobile app development, automated systems, and home tech solutions.
          Our mission is to provide innovative, efficient, and reliable technology services tailored to meet the needs of our clients.
        </p>
        <p className="about-description">
          We leverage the latest technologies to build scalable software and smart home automation systems. Whether it's creating a seamless user experience or developing complex business solutions, we are committed to turning your vision into reality.
        </p>

        <div className="ceo-section">
          <img
            src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/ProfilePicture.jpg"
            alt="CEO Kubomu Edwin - A tech visionary and leader"
            className="ceo-image"
          />
          <h3 className="ceo-heading centered-heading">About the CEO</h3>
          <p className="about-description">
            Led by our visionary CEO, <b>Kubomu Edwin George</b>, Cruise Tech Solutions is driven by a passion for cutting-edge technology. With years of experience in the tech industry, Kubomu has built a reputation for delivering innovative and reliable solutions that meet the evolving needs of clients across various industries.
          </p>
          <p className="about-description">
            Kubomu's leadership is grounded in a strong focus on quality and customer satisfaction, ensuring that every project is handled with the utmost professionalism and expertise.
          </p>
        </div>

        <div className="expertise-section">
          <h3 className="expertise-heading centered-heading">Our Expertise</h3>
          <ul className="expertise-list">
            <li className="expertise-list-item">
              <FontAwesomeIcon icon={faCog} className="expertise-icon" />
              Automated Systems: Integrating technology for convenience and efficiency, from smart home installations to enterprise automation.
            </li>
            <li className="expertise-list-item">
              <FontAwesomeIcon icon={faHome} className="expertise-icon" />
              Home Tech Solutions: Specializing in home automation, enabling seamless control of lighting, security, and entertainment systems.
            </li>
            <li className="expertise-list-item">
              <FontAwesomeIcon icon={faMobileAlt} className="expertise-icon" />
              Mobile App Development: Designing and developing cross-platform applications that provide a superior user experience for businesses and consumers.
            </li>
            <li className="expertise-list-item">
              <FontAwesomeIcon icon={faLaptopCode} className="expertise-icon" />
              Web Development: Creating responsive and dynamic websites that drive engagement and deliver results.
            </li>
            <li className="expertise-list-item">
              <FontAwesomeIcon icon={faComments} className="expertise-icon" />
              Tech Consulting: Helping you navigate the fast-evolving tech landscape and find the best solutions for your needs.
            </li>
          </ul>
        </div>

        <div className="team-section">
          <h3 className="team-heading centered-heading">Meet Our Team</h3>
          <p className="team-description">
            Our team consists of talented and dedicated professionals who bring innovation and expertise to every project.
          </p>
          <div className="team-list">
            <div className="team-member">
              <img
                src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/Vince.jpg"
                alt="Team Member 1"
                className="team-member-image"
              />
              <h4 className="team-member-name">Rwot-omiya Daudi Vincent</h4>
              <p className="team-member-role">Co-Founder/FullStack Developer/Lead Developer</p>
            </div>
            <div className="team-member">
              <img
                src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/Gabriel.jpg"
                alt="Team Member 2"
                className="team-member-image"
              />
              <h4 className="team-member-name">Ochom Gabriel Parsley</h4>
              <p className="team-member-role">Designer/Animator/Game Developer</p>
            </div>
            <div className="team-member">
              <img
                src="https://cruisetechsolutions.s3.eu-north-1.amazonaws.com/Rafael.jpg"
                alt="Team Member 3"
                className="team-member-image"
              />
              <h4 className="team-member-name">Ocitti Raphael</h4>
              <p className="team-member-role">Project Manager/DevOps</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
