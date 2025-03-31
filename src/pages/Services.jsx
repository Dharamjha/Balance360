import React, { useEffect, useState } from 'react';
import './services.css';

const Services = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
        const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-header animate-on-scroll">
          <h2>Transform Your Life With Us</h2>
          <p>
            Experience our revolutionary 1-on-1 personalized training programs designed to help you achieve your wellness goals.
            Our expert trainers are dedicated to your success with a risk-free 4-week trial period.
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              icon: "fas fa-spa",
              title: "Meditation",
              description: "Master the art of presence with our expert meditation instructors. Learn techniques to quiet your mind, improve focus, and find inner peace in today's hectic world."
            },
            {
              icon: "fas fa-pray",
              title: "Yoga Classes",
              description: "Join our expert-led yoga sessions designed for all skill levels. Improve flexibility, strength, and mental clarity through ancient practices tailored for modern life."
            },
            {
              icon: "fas fa-brain",
              title: "Mindfulness",
              description: "Develop mindfulness skills to reduce stress and enhance your daily life. Our practices help you stay present, improve focus, and cultivate a positive outlook."
            },
            {
              icon: "fas fa-mountain",
              title: "Wellness Retreats",
              description: "Escape from daily stresses with our immersive wellness retreats. Experience transformative practices in serene natural settings for complete mind-body rejuvenation."
            },
            {
              icon: "fas fa-wind",
              title: "Breathing Techniques",
              description: "Discover the power of breath with our specialized breathing workshops. Learn techniques to reduce anxiety, increase energy, and improve overall health through conscious breathing."
            },
            {
              icon: "fas fa-dumbbell",
              title: "Weight Loss",
              description: "Our science-backed weight loss programs are customized to your body type, metabolism, and lifestyle. Achieve sustainable results with nutrition plans, workout routines, and ongoing support."
            }
          ].map((service, index) => (
            <div key={index} className={`service-card animate-on-scroll`} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="trial-banner animate-on-scroll">
          <div className="trial-banner-content">
            <h3>Try It Risk-Free For 4 Weeks</h3>
            <p>
              We're so confident in our programs that we offer a full 4-week trial period at no cost.
              Experience real results before making any financial commitment. No contracts, no pressure.
            </p>
          </div>
          <div className="trial-button-wrapper">
            <a href="/join-now" className="trial-button pulse-animation">Start Your Free Trial</a>
          </div>
        </div>

        <div className="features-section animate-on-scroll">
          <div className="features-grid">
            {[
              {
                icon: "fas fa-user-shield",
                title: "Certified Experts",
                description: "All our trainers are professionally certified with years of experience"
              },
              {
                icon: "fas fa-clipboard-check",
                title: "Custom Programs",
                description: "Personalized plans that adapt to your progress and needs"
              },
              {
                icon: "fas fa-mobile-alt",
                title: "24/7 Support",
                description: "Continuous guidance through our mobile app and coaching team"
              },
              {
                icon: "fas fa-chart-line",
                title: "Progress Tracking",
                description: "Advanced analytics to monitor your improvement journey"
              }
            ].map((feature, index) => (
              <div key={index} className="feature-item" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section animate-on-scroll">
          <div className="stats-container">
            {[
              { value: "94%", label: "Success Rate" },
              { value: "5,000+", label: "Happy Clients" },
              { value: "50+", label: "Expert Trainers" },
              { value: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="stat-item count-animation" style={{ animationDelay: `${index * 0.25}s` }}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose-us animate-on-scroll">
          <div className="why-choose-us-header">
            <h2>The Difference Is Personal</h2>
            <p>
              Our unique approach focuses on building meaningful relationships between you and your dedicated coach.
              This is not just training; it's a transformational partnership.
            </p>
          </div>

          <div className="benefits-grid">
            {[
              {
                icon: "fas fa-users",
                title: "Elite Personal Trainers",
                description: "Our handpicked team of expert coaches specializes in different areas of wellness. Each trainer undergoes rigorous training and certification to ensure you receive world-class guidance tailored to your specific needs and goals."
              },
              {
                icon: "fas fa-fingerprint",
                title: "Truly Individualized Approach",
                description: "We believe that no two journeys are alike. Your program is meticulously crafted around your body type, lifestyle, preferences, and goals. We adapt continuously as you progress, ensuring optimal results throughout your wellness journey."
              }
            ].map((benefit, index) => (
              <div key={index} className="benefit-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <div className="benefit-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Begin Your Transformation Today</h2>
            <a href="/join-now" className="cta-button float-animation">Book Your Free Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;