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
  VStack,
  IconButton,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import textLogo from '../assets/logoTextOnly.png';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import { useState, useRef, useEffect } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';

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

  const scrollThumbnailsUp = () => {
    thumbnailContainerRef.current.scrollTop -= 510; // 100 * 5 + some margin space
  };

  const scrollThumbnailsDown = () => {
    thumbnailContainerRef.current.scrollTop += 510; // 100 * 5 + some margin space
  };

  const thumbnailContainerRef = useRef(null);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  }

  const { height } = useWindowSize();

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
          <ModalBody overflow="hidden">
            <Flex
              direction={['column', 'row']}
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              {/* Main Image */}
              <Box
                flex="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
              >
                <CarouselComponent
                  images={selectedGallery}
                  currentSlide={currentSlide}
                />
              </Box>

              {/* Thumbnails */}
              <VStack
                align="center"
                spacing={2}
                ml={[0, 4]}
                mt={[4, '105px']}
                position="relative"
                height="100%"
              >
                {/* <IconButton
                  icon={<FaCircleChevronLeft rotate={90} />}
                  onClick={scrollThumbnailsUp}
                  bg="none"
                  color="white"
                  _hover={{ color: 'teal.400', bg: 'none' }}
                  aria-label="Scroll Thumbnails Up"
                /> */}
                <Box
                  ref={thumbnailContainerRef}
                  overflowY="auto"
                  h={height <= 900 ? '605px' : '800px'}
                  width="120px"
                  mt={height <= 900 ? '12px' : '0px'}
                >
                  <VStack spacing={2}>
                    {selectedGallery.map((image, idx) => (
                      <Box key={idx} my={1}>
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
                  </VStack>
                </Box>
                {/* <IconButton
                  icon={<FaCircleChevronRight rotate={90} />}
                  onClick={scrollThumbnailsDown}
                  bg="none"
                  color="white"
                  _hover={{ color: 'teal.400', bg: 'none' }}
                  aria-label="Scroll Thumbnails Down"
                /> */}
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryComponent;
