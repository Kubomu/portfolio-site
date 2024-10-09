import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags
import './Contact.css'; // Use an external CSS file for better organization

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(''); // To give user feedback on form submission

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      // Handle form submission, such as sending data to a server.
      setFormStatus(`Thank you, ${formData.name}! We will get back to you shortly.`);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } else {
      setFormStatus('Please fill in all fields before submitting.');
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Get in touch with Cruise Tech Solutions for inquiries, feedback, or project discussions." />
        <meta name="keywords" content="Contact, Cruise Tech Solutions, inquiries, feedback, projects" />
        <meta name="author" content="Kubomu Edwin" />
        <title>Cruise Tech Solutions - Contact Us</title>
      </Helmet>

      <section id="contact" className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">
          We would love to hear from you! Whether you have questions, feedback, or would like to discuss a project,
          feel free to reach out to us.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> Kubomuedwin@gmail.com</p>
          <p><strong>Phone:</strong> +256 788 150 981</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            className="input-field"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="input-field"
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="textarea-field"
          />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {formStatus && <p className="form-status">{formStatus}</p>}
      </section>
    </>
  );
};

export default Contact;
