import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import importance from "../images/importance2025.jpeg";
import Slider from "../components/Slider";
import Form from "../components/Form";
import Footer from "../components/Footer";



const wellnessSlides = [
  {
    title: "Mental clarity enhances productivity and happiness.",
    image: importance, 
  },
  {
    title: "A fit body fuels energy and longevity.",
    image: importance,
  },
  {
    title: "Daily exercise reduces stress and anxiety.",
    image: importance,
  },
  {
    title: "Mindfulness improves focus and emotional resilience.",
    image: importance,
  },
  {
    title: "Healthy eating is the key to a balanced life.",
    image: importance,
  },
  {
    title: "Regular sleep patterns improve cognitive function.",
    image: importance,
  },
  {
    title: "Strength training builds muscle and confidence.",
    image: importance,
  },
  {
    title: "Meditation reduces blood pressure and anxiety.",
    image: importance,
  },
  {
    title: "Spending time in nature boosts mental health.",
    image: importance,
  },
  {
    title: "Social connections strengthen emotional wellbeing.",
    image: importance,
  },
  {
    title: "Hydration is essential for peak physical performance.",
    image: importance,
  },
  {
    title: "Flexibility training prevents injuries and improves posture.",
    image: importance,
  },
  {
    title: "Digital detoxes restore mental focus and creativity.",
    image: importance,
  },
  {
    title: "Regular health check-ups prevent future complications.",
    image: importance,
  },
  {
    title: "Positive thinking builds mental resilience against stress.",
    image: importance,
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wellnessSlides.length);
  };

  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
Empower Your Mind, Energize Your Body
</motion.h1>
      
      <Slider />
      
      <div className="full-screen-card">
        <motion.div 
          className="card-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          key={currentSlide}
        >
          <div className="image-overlay"></div>
          <img 
            src={wellnessSlides[currentSlide].image} 
            alt="Wellness" 
            className="card-background"
          />
          
          <motion.div 
            className="card-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="fixed-heading">THE POWER OF WELLNESS</h1>
            <div className="content-divider"></div>
            <h2 className="slide-title">{wellnessSlides[currentSlide].title}</h2>
            <div className="content-spacer"></div>
            <div className="next-slide-button-container">
              <motion.button 
                className="next-slide-button"
                onClick={nextSlide}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next Insight
              </motion.button>
            </div>
            <div className="slide-counter">
              {currentSlide + 1} / {wellnessSlides.length}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Home;