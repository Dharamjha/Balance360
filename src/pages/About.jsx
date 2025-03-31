import React, { useState, useEffect } from "react";
import "./About.css";

const testimonials = [
  { text: "Balance360 transformed my approach to wellness. I've never felt more centered and energized.", author: "Sarah J." },
  { text: "A perfect blend of mindfulness and holistic health. Love the community!", author: "David R." },
  { text: "Their programs helped me achieve balance in my busy life. Highly recommend!", author: "Emily T." },
  { text: "Amazing guidance and support. My health and energy levels have improved!", author: "James L." },
  { text: "Incredible experience! The mindfulness practices really made a difference.", author: "Sophia M." },
];

const AboutUs = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="fade-in">Welcome to Balance360</h1>
        <p className="fade-in delay-1">
          At <span>Balance360</span>, we believe in achieving total well-being—mind, body, and soul.
          Our mission is to help you find harmony, balance, and vitality through holistic wellness practices.
        </p>
        
        <div className="about-grid">
          <div className="about-card slide-in-left">
            <h2>🌿 Our Vision</h2>
            <p>
              To inspire a healthier world by promoting mindful living, natural wellness, and personal growth.
            </p>
          </div>
          
          <div className="about-card slide-in-right">
            <h2>🌞 Our Mission</h2>
            <p>
              Empower individuals to take control of their well-being with expert guidance, personalized programs, and a supportive community.
            </p>
          </div>
        </div>
        
        <div className="services-section fade-in delay-2">
          <h2>Our Holistic Approach</h2>
          <div className="services-container">
            <div className="service-item bounce">
              <div className="service-icon">🧘</div>
              <h3>Mind Wellness</h3>
              <p>Meditation, stress management, and mindfulness practices to nurture mental clarity.</p>
            </div>
            <div className="service-item bounce delay-1">
              <div className="service-icon">🥗</div>
              <h3>Body Wellness</h3>
              <p>Nutrition guidance, fitness programs, and natural health solutions for optimal physical health.</p>
            </div>
            <div className="service-item bounce delay-2">
              <div className="service-icon">✨</div>
              <h3>Soul Wellness</h3>
              <p>Spiritual practices, energy work, and personal growth journeys to nourish your inner self.</p>
            </div>
          </div>
        </div>
        
        <div className="testimonials fade-in delay-2">
          <h2>What Our Community Says</h2>
          <div className="testimonial-slider">
            <div className="testimonial slide-in-left">
              <p>"{testimonials[index].text}"</p>
              <div className="testimonial-author">- {testimonials[index].author}</div>
            </div>
          </div>
        </div>
        
        <div className="cta-section fade-in delay-1">
          <h2>Begin Your Wellness Journey Today</h2>
          <p>Join our community and discover the perfect balance for your mind, body, and soul.</p>
          <button className="cta-button bounce">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
