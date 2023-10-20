import { Box, Image, IconButton, useMediaQuery } from '@chakra-ui/react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react';

function CarouselComponent({ images, currentSlide, onSlideChange }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile] = useMediaQuery('(max-width: 480px)'); // You can adjust this breakpoint as needed

  // thumbnail update handler
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
        left={isMobile ? '-5px' : '20px'}
        top="50%"
        bg="none"
        color="white"
        fontSize={isMobile ? '35px' : '30px'} // Use isMobile to determine fontSize
        _hover={{ color: 'teal.400', bg: 'none' }}
        transform="translateY(-50%)"
        aria-label="Previous Image"
        icon={isMobile ? <ChevronLeftIcon /> : <FaCircleChevronLeft />}
        onClick={prevImage}
      />
      <IconButton
        position="absolute"
        right={isMobile ? '-5px' : '20px'}
        top="50%"
        bg="none"
        color="white"
        fontSize={isMobile ? '35px' : '30px'} // Use isMobile to determine fontSize
        _hover={{ color: 'teal.400', bg: 'none' }}
        transform="translateY(-50%)"
        aria-label="Next Image"
        icon={isMobile ? <ChevronRightIcon /> : <FaCircleChevronRight />}
        onClick={nextImage}
      />
    </Box>
  );
}

export default CarouselComponent;
