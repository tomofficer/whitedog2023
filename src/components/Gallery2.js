import React, { useState } from 'react';
import Modal from 'react-modal';
import { Box, Grid, Heading, CloseButton } from '@chakra-ui/react';

const ImageGallery = () => {
  //state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
        'relhttps://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
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

  //modal handlers
  const openModal = index => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box
        py={{ base: 4, sm: 0, md: 4 }}
        mt={{ base: 2, sm: 6, md: 28 }}
        px={{ base: 10, sm: 20, md: 36 }}
      >
        <Heading>Gallery</Heading>
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
              onClick={() => openModal(index)}
            />
          ))}
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onRequestClose={closeModal} maxW={'xl'} border>
        {selectedImageIndex !== null && (
          <Box
            my={{ base: 4, sm: 0, md: 20 }}
            mt={{ base: 2, sm: 6, md: 28 }}
            px={{ base: 10, sm: 20, md: 36 }}
          >
            <CloseButton
              onClick={closeModal}
              pos="absolute"
              top="0"
              right="0"
              p="6"
            />
            <img src={galleryData[selectedImageIndex].image} alt="og img" />
            <div className="related-images">
              {galleryData[selectedImageIndex].relatedImages.map(
                (image, index) => (
                  <img key={index} src={image} alt={`2 ${index + 1}`} />
                )
              )}
            </div>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default ImageGallery;
