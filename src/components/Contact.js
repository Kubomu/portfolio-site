import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, like sending data to a server.
    alert(`Thank you, ${formData.name}! We will get back to you shortly.`);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Get in touch with Cruise Tech Solutions for inquiries, feedback, or project discussions." />
        <meta name="keywords" content="Contact, Cruise Tech Solutions, inquiries, feedback, projects" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions - Contact Us</title>
      </Helmet>

      <section id="contact" style={contactStyle}>
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Whether you have questions, feedback, or would like to discuss a project,
          please feel free to reach out to us.
        </p>
        <div style={contactInfoStyle}>
          <p>
            <strong>Email:</strong> Kubomuedwin@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +256 788 150 981
          </p>
        </div>
        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
          />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </section>
    </>
  );
};

const contactStyle = {
  padding: '50px 20px',
  backgroundColor: '#ffffff',
  textAlign: 'center',
};

const contactInfoStyle = {
  margin: '20px 0',
  fontSize: '18px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  margin: '0 auto',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  height: '100px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#2C3E50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Contact;
