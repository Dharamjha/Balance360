import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Form.css";

const Form = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    goal: "",
    customGoal: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Form submitted:", formState);
      
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        gender: "",
        phone: "",
        goal: "",
        customGoal: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <motion.div 
        className="form-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-card-header-gradient"></div>
        
        <motion.div 
          className="form-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h2>Start Your Journey</h2>
          <p>Transform with personalized guidance</p>
        </motion.div>
        
        {!isSubmitted ? (
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="input-row">
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="name-input"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email-input"
                  required
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="input-row">
              <div className="input-field">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="phone-input"
                  placeholder="Phone Number"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="input-field">
                <select
                  name="goal"
                  id="goal"
                  value={formState.goal}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="overall-fitness">Overall Fitness</option>
                  <option value="stress-reduction">Stress Reduction</option>
                  <option value="flexibility">Flexibility</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            {formState.goal === "other" && (
              <div className="input-row">
                <div className="input-field">
                  <textarea
                    name="customGoal"
                    id="customGoal"
                    className="goaltext"
                    placeholder="Please describe your fitness goal"
                    value={formState.customGoal}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}
            
            <div className="gender-section">
              <label>Gender</label>
              <div className="gender-options">
                <div 
                  className={`gender-option ${formState.gender === "male" ? "selected" : ""}`}
                  onClick={() => setFormState({...formState, gender: "male"})}
                >
                  Male
                </div>
                <div 
                  className={`gender-option ${formState.gender === "female" ? "selected" : ""}`}
                  onClick={() => setFormState({...formState, gender: "female"})}
                >
                  Female
                </div>
                <div 
                  className={`gender-option ${formState.gender === "other" ? "selected" : ""}`}
                  onClick={() => setFormState({...formState, gender: "other"})}
                >
                  Other
                </div>
              </div>
            </div>
            
            <motion.button 
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Processing..." : "Get Started Now"}
            </motion.button>
            
            <div className="form-footer">
              <div className="security-info">100% Secure & Confidential</div>
              <div className="privacy-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Privacy Protected</span>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>Your information has been submitted successfully.</p>
            <p>We'll be in touch with you shortly!</p>
            <div className="submit-another-container">
              <motion.button 
                onClick={() => setIsSubmitted(false)}
                className="reset-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Another
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Form;