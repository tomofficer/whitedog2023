import { Box, Image, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaCircleChevronDown, FaCircleChevronUp } from 'react-icons/fa6';

import React, { useState } from 'react';

function CarouselComponent({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage(prevImage => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      prevImage => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <Box position="relative">
      <Image src={images[currentImage]} alt="Gallery Image" />

      <IconButton
        position="absolute"
        left="5px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Previous Image"
        icon={<FaCircleChevronDown />}
        onClick={prevImage}
      />
      <IconButton
        position="absolute"
        right="5px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Next Image"
        icon={<FaCircleChevronUp />}
        onClick={nextImage}
      />
    </Box>
  );
}

export default CarouselComponent;
