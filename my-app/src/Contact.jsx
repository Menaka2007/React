import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-header">
        <p>We'd love to hear from you. Send us a message!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Shopping Street<br />Commerce City, CC 12345</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>support@shopeasy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
