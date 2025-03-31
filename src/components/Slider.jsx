import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Slider.css";

import poster1 from "../images/posterr1.png";
import poster2 from "../images/poster2.png";
import poster3 from "../images/poster3.png";
import poster4 from "../images/poster4.png";
import poster5 from "../images/poster5.png";

const images = [poster1, poster2, poster3, poster4, poster5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <button
        className="prev"
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
      >
        &#10094;
      </button>
      
      <motion.img 
        src={images[currentIndex]} 
        alt="Slider" 
        className="slide-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <button
        className="next"
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;