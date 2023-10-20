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
  useMediaQuery,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import textLogo from '../assets/logoTextOnly.png';
import CarouselComponent from './CarouselComponent'; // assuming they're in the same directory
import { useState, useRef, useEffect } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

function GalleryComponent({ galleries, fullGalleryRef }) {
  const { isOpen, onOpen, onClose: originalOnClose } = useDisclosure();

  const onClose = () => {
    setCurrentSlide(0); // Reset the current slide to 0 (or any desired index) when closing the modal
    originalOnClose(); // Call the original onClose function to close the modal
  };

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

  const logoWidth = useBreakpointValue({
    base: '400px',
    sm: '500px',
    md: '600px',
    lg: '700px',
    xl: 'auto',
  });
  const textSize = useBreakpointValue({
    base: '20px',
    sm: '22px',
    md: '24px',
    lg: '26px',
    xl: '30px',
  });

  const logoPadding = useBreakpointValue({
    base: '50px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '350px',
  });

  const textPadding = useBreakpointValue({
    base: '50px',
    sm: '50px',
    md: '50px',
    lg: '0px',
    xl: '0px',
  });

  //custom breakpoints for big screens
  const [isLargerThan13Inches] = useMediaQuery('(min-width: 1500px)');
  const galleryPadding = isLargerThan13Inches ? '200px' : '0px';

  //mobile state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Example mobile breakpoint

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box mb="50px" mt="50px" mx={galleryPadding}>
      <Box ref={fullGalleryRef}></Box>

      <HStack justifyContent="center">
        <Image src={textLogo} w={logoWidth} px={logoPadding} />
      </HStack>
      <Text fontFamily={primaryFont} fontSize={textSize} px={textPadding}>
        ARCHITECTURAL MILLWORK & CUSTOM CABINETRY
      </Text>
      <Grid
        templateColumns={{
          base: '1fr',
          sm: '1fr',
          md: '1fr',
          lg: 'repeat(2, 1fr)',
        }}
        gap={20}
        my={{ base: 6, sm: 10, md: 16 }}
        px={{ base: '40px', md: '130px', lg: '200px' }}
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
                objectFit="cover"
                objectPosition="center center"
                width={['300px', '500px', '500px']}
                height={['300px', '500px', '500px']}
              />

              <div className="overlay" style={{ borderRadius: '68px' }}>
                <img src={companyLogo} alt="White Dog Woodworking Logo" />
                <p className="image-title">{gallery.title}</p>
              </div>
            </div>
          </>
        ))}
      </Grid>

      {isMobile ? (
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay backdropFilter="blur(4px)" />
          <ModalContent
            width="90vw"
            height="90vh"
            margin="auto"
            bg="rgba(0, 0, 0, 0.2)"
          >
            <ModalCloseButton color="white" mt="10px" />
            <ModalBody overflow="hidden" p={0}>
              {' '}
              {/* Remove any default padding */}
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                m={0} // Remove any default margins
              >
                {/* Title right above the image */}
                <Text color="white" fontSize="xl" mt="20px">
                  {' '}
                  {/* Adjusted margin */}
                  {selectedGalleryIndex !== null &&
                  galleries[selectedGalleryIndex]
                    ? galleries[selectedGalleryIndex].title
                    : 'Gallery'}
                </Text>

                {/* Main Image */}
                <Box
                  flex="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  overflow="hidden"
                  m={0} // Remove any default margins
                  p={0} // Remove any default padding
                >
                  <CarouselComponent
                    images={selectedGallery}
                    currentSlide={currentSlide}
                    onSlideChange={newSlideIndex =>
                      setCurrentSlide(newSlideIndex)
                    }
                  />
                </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      ) : (
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
      )}
    </Box>
  );
}

export default GalleryComponent;
