import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Box,
  Grid,
  Heading,
  CloseButton,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

const ImageGallery = ({ galleryRef, setShowNav, showNav }) => {
  //image data
  const galleryData = [
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
      ],
    },
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/frames-for-your-heart-MyeOnGcibCQ-unsplash_lTu8kwUQw.jpg?updatedAt=1690600604766',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
      ],
    },
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/hutomo-abrianto-9ZvuWg8deho-unsplash_xlgzVzHF0.jpg?updatedAt=1690600580601',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
      ],
    },
  ];

  //state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  //modal handlers
  const openModal = (data, index) => {
    console.log(data);
    setSelectedImageIndex(index);
    setIsOpen(true);
    setShowNav(true);
    console.log('the nav is showing:', showNav);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowNav(false);
  };

  //carousel styling
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };

  //carousel variables
  const slidesCount = 2;
  // const slidesCount = galleryData.length;

  //carousel handlers
  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };

  //carousel transitions
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <>
      <Box
        py={{ base: 4, sm: 0, md: 4 }}
        mt={{ base: 2, sm: 6, md: 28 }}
        px={{ base: 10, sm: 20, md: 36 }}
      >
        <div ref={galleryRef}></div>
        <Heading mt={20}>Gallery</Heading>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={20}
          my={{ base: 6, sm: 10, md: 24 }}
        >
          {galleryData.map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt={`1 ${index + 1}`}
              onClick={() => openModal(data, index)}
            />
          ))}
        </Grid>
      </Box>
      <Modal isOpen={isOpen} onRequestClose={closeModal} maxW={'xl'}>
        {selectedImageIndex !== null && (
          <Box
            my={{ base: 4, sm: 0, md: 10 }}
            mt={{ base: 2, sm: 6, md: 10 }}
            px={{ base: 10, sm: 20, md: 10 }}
            zIndex={100}
          >
            <CloseButton
              onClick={closeModal}
              pos="absolute"
              top="0"
              right="0"
              p="6"
            />
            {/* 
            original code -> clicked image, can remove or use if looks good
            <img src={galleryData[selectedImageIndex].image} alt="og img" /> */}
            {/* {galleryData[selectedImageIndex].relatedImages.map(
              (image, index) => (
                <img key={index} src={image} alt={`2 ${index + 1}`} />
              )
            )} */}

            <Flex
              w={{ base: 'xl', sm: '4xl', md: '6xl' }}
              p={10}
              alignItems="center"
              justifyContent="center"
            >
              <Flex w="full" overflow="hidden" pos="relative">
                <Flex h="full" w="full" {...carouselStyle}>
                  {galleryData[selectedImageIndex].relatedImages.map(
                    (image, index) => (
                      <Box
                        key={`slide-${index}`}
                        boxSize="full"
                        shadow="md"
                        flex="none"
                      >
                        <Text
                          color="white"
                          fontSize="xs"
                          p="8px 12px"
                          pos="absolute"
                          top="0"
                        >
                          {index + 1} / {slidesCount}
                        </Text>
                        <Image
                          src={image}
                          alt="carousel image"
                          boxSize="full"
                          backgroundSize="cover"
                        />
                      </Box>
                    )
                  )}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                  &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                  &#10095;
                </Text>
              </Flex>
            </Flex>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default ImageGallery;
