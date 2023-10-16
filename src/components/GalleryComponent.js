import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  HStack,
  Text,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import textLogo from '../assets/logoTextOnly.png';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import PropTypes from 'prop-types';
import { useState } from 'react';

function GalleryComponent({ galleries, fullGalleryRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);

  const handleImageClick = (subGallery, idx) => {
    setSelectedGallery(subGallery);
    setSelectedGalleryIndex(idx);
    onOpen();
  };

  return (
    <Box>
      <Box ref={fullGalleryRef}></Box>

      <HStack justifyContent="center">
        <Image src={textLogo} w="auto" px="150px" />
      </HStack>
      <Text fontFamily={primaryFont} fontSize={'30px'}>
        A GALLERY OF OUR WORK
      </Text>
      {galleries.map((gallery, idx) => (
        <Image
          key={idx}
          src={gallery.defaultImage}
          onClick={() => handleImageClick(gallery.subGallery, idx)}
        />
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent
          width={['90vw', '80vw']}
          height={['90vh', '80vh']}
          margin="auto"
          bg="rgba(0, 0, 0, 0.2)"
        >
          <ModalHeader color="white">
            {selectedGalleryIndex !== null && galleries[selectedGalleryIndex]
              ? galleries[selectedGalleryIndex].title
              : 'Gallery'}
          </ModalHeader>

          <ModalCloseButton color="white" />
          <ModalBody>
            <CarouselComponent images={selectedGallery} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryComponent;
