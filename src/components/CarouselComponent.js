import { Box, Image, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

import React, { useState, useEffect } from 'react';

function CarouselComponent({ images, currentSlide }) {
  const [currentImage, setCurrentImage] = useState(0);

  //thumbnail update handler
  useEffect(() => {
    setCurrentImage(currentSlide);
  }, [currentSlide]);

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
        bg="none"
        color="white"
        _hover={{ color: 'teal.400', bg: 'none' }}
        transform="translateY(-50%)"
        aria-label="Previous Image"
        icon={<FaCircleChevronLeft />}
        onClick={prevImage}
      />
      <IconButton
        position="absolute"
        right="5px"
        top="50%"
        bg="none"
        color="white"
        _hover={{ color: 'teal.400', bg: 'none' }}
        transform="translateY(-50%)"
        aria-label="Next Image"
        icon={<FaCircleChevronRight />}
        onClick={nextImage}
      />
    </Box>
  );
}

export default CarouselComponent;
