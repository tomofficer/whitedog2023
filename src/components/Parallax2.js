import React, { useState, useEffect } from 'react';
import '../componentStyling/parallax2.css'; // Import your CSS file
import { Text } from '@chakra-ui/react';
import Services from './Services';

function Parallax2() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-content"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`, // Adjust the multiplier for the parallax effect
        }}
      >
        <Services />
      </div>
    </div>
  );
}

export default Parallax2;
