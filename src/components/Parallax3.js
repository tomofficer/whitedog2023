import React, { useEffect, useState } from 'react';
import '../componentStyling/parallax3.css';
import { Box } from '@chakra-ui/react';

const Parallax3 = () => {
  const [topOffset, setTopOffset] = useState(0);
  const imageUrl =
    'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/benjamin-thomas-idEEZ-wQkfA-unsplash.jpg?updatedAt=1693888762658';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setTopOffset(scrolled * 0.5); // Adjusting the multiplier can make the effect more pronounced
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container2">
      <div className="parallax-img2">
        <img src={imageUrl} alt="saw" />
      </div>
    </div>
  );
};

export default Parallax3;
