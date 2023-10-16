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
  Flex,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import textLogo from '../assets/logoTextOnly.png';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import { useState } from 'react';

function GalleryComponent({ galleries, fullGalleryRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
          <ModalBody display="flex" alignItems="center">
            <Flex direction="row" width="100%" height="100%">
              <Box flex="30">
                <CarouselComponent
                  images={selectedGallery}
                  currentSlide={currentSlide}
                />
              </Box>
              <Spacer width="20px" />
              <Stack spacing={4} maxW="120px" overflowY="auto">
                {selectedGallery.map((image, idx) => (
                  <Box key={idx}>
                    <Image
                      src={image}
                      width="100px"
                      height="100px"
                      onClick={() => {
                        setCurrentSlide(idx);
                      }}
                      cursor="pointer"
                      borderRadius="5px"
                    />
                  </Box>
                ))}
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryComponent;
