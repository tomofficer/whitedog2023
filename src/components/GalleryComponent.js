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
} from '@chakra-ui/react';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import PropTypes from 'prop-types';
import { useState } from 'react';

function GalleryComponent({ galleries }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGallery, setSelectedGallery] = useState([]);

  const handleImageClick = subGallery => {
    setSelectedGallery(subGallery);
    onOpen();
  };

  return (
    <Box>
      {galleries.map((gallery, idx) => (
        <Image
          key={idx}
          src={gallery.defaultImage}
          onClick={() => handleImageClick(gallery.subGallery)}
        />
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CarouselComponent images={selectedGallery} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryComponent;
