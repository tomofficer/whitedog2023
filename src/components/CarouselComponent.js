import { Box, Image, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

import React, { useState, useEffect } from 'react';

function CarouselComponent({ images, currentSlide, onSlideChange }) {
  const [currentImage, setCurrentImage] = useState(0);

  //thumbnail update handler
  useEffect(() => {
    setCurrentImage(currentSlide);
  }, [currentSlide]);

  const nextImage = () => {
    const newImage = (currentImage + 1) % images.length;
    setCurrentImage(newImage);
    onSlideChange(newImage);
  };

  const prevImage = () => {
    const newImage = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(newImage);
    onSlideChange(newImage);
  };

  return (
    <Box position="relative">
      <Image src={images[currentImage]} alt="Gallery Image" />

      <IconButton
        position="absolute"
        left="20px"
        top="50%"
        bg="none"
        color="white"
        fontSize="30px"
        _hover={{ color: 'teal.400', bg: 'none' }}
        transform="translateY(-50%)"
        aria-label="Previous Image"
        icon={<FaCircleChevronLeft />}
        onClick={prevImage}
      />
      <IconButton
        position="absolute"
        right="20px"
        top="50%"
        bg="none"
        color="white"
        fontSize="30px"
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
