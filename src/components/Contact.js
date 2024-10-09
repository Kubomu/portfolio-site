import React, { useState } from 'react';
import './Contact.css'; // Ensure to create this CSS file and link it correctly

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [testimonials, setTestimonials] = useState([]); // State to hold submitted testimonials

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new testimonial to the testimonials state
    setTestimonials((prevTestimonials) => [
      ...prevTestimonials,
      { ...formData, id: Date.now() }, // Add a unique id for each testimonial
    ]);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    alert(`Thank you, ${formData.name}! Your testimonial has been submitted.`);
  };

  return (
    <section id="contact" style={contactStyle}>
      <h2 className="contact-heading">Testimonials</h2>
      <p className="contact-description">
        We value your feedback! Please share your thoughts about our services and how we can improve.
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Testimonial"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button">Submit Testimonial</button>
      </form>

      {/* Display submitted testimonials */}
      <div style={testimonialsStyle}>
        <h3 className="testimonials-heading">Customer Testimonials:</h3>
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} style={testimonialStyle}>
              <strong>{testimonial.name}</strong> ({testimonial.email}):<br />
              <p>{testimonial.message}</p>
            </div>
          ))
        ) : (
          <p>No testimonials submitted yet.</p>
        )}
      </div>
    </section>
  );
};

const contactStyle = {
  padding: '50px 20px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '500px',
  margin: '0 auto',
};

const testimonialsStyle = {
  marginTop: '20px',
  textAlign: 'left',
  maxWidth: '500px',
  margin: '20px auto',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
};

const testimonialStyle = {
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #2C3E50',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
};

export default Contact;
