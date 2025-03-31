import React, { useState } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would normally send the email to your backend
      setSubscribeMessage('Thank you for subscribing!');
      setEmail('');
      
      // Clear the message after 3 seconds
      setTimeout(() => {
        setSubscribeMessage('');
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-brand">
            <h2>Balance360</h2>
            <p>Guiding you through your journey of wellness, mindfulness, and inner peace.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="link-column">
              <h3>Explore</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/diet">Diet Plan</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h3>Services</h3>
              <ul>
                <li><a href="/services#meditation">Meditation</a></li>
                <li><a href="/services#yoga">Yoga Classes</a></li>
                <li><a href="/services#mindfulness">Mindfulness</a></li>
                <li><a href="/services#retreats">Wellness Retreats</a></li>
                <li><a href="/services#breathing">Breathing Techniques</a></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h3>Support</h3>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="newsletter-section">
          <h3>Subscribe to our newsletter</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={handleEmailChange}
              aria-label="Email for newsletter"
            />
          </form>
          {subscribeMessage && <p className="subscribe-message">{subscribeMessage}</p>}
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Balance360. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/balanceee360/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;