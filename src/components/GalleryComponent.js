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
  Grid,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import textLogo from '../assets/logoTextOnly.png';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import { useState, useRef, useEffect } from 'react';

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

  const companyLogo =
    'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitelogo_A1KeRKfjy.png?updatedAt=1690484186754';

  return (
    <Box>
      <Box ref={fullGalleryRef}></Box>

      <HStack justifyContent="center">
        <Image src={textLogo} w="auto" px="350px" />
      </HStack>
      <Text fontFamily={primaryFont} fontSize={'30px'}>
        A GALLERY OF OUR WORK
      </Text>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={20}
        my={{ base: 6, sm: 10, md: 16 }}
        px={36}
      >
        {galleries.map((gallery, idx) => (
          <>
            <div className="image-container">
              <Image
                key={idx}
                src={gallery.defaultImage}
                onClick={() => handleImageClick(gallery.subGallery, idx)}
                borderRadius={'68px'}
                _hover={{ cursor: 'pointer' }}
              />
              <div className="overlay" style={{ borderRadius: '68px' }}>
                <img src={companyLogo} alt="White Dog Woodworking Logo" />
                <p className="image-title">{gallery.title}</p>
              </div>
            </div>
          </>
        ))}
      </Grid>

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
                  onSlideChange={newSlideIndex =>
                    setCurrentSlide(newSlideIndex)
                  }
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
                          border={
                            idx === currentSlide ? '2px solid white' : 'none'
                          } // This is where the conditional rendering takes place
                        />
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default GalleryComponent;
