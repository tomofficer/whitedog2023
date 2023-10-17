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
  Text,
  Flex,
  VStack,
  HStack,
  Center,
  Icon,
} from '@chakra-ui/react';
import CarouselComponent from './CarouselComponent';
import { useState, useRef, useEffect } from 'react';
import {
  GiHammerNails,
  GiCircularSawblade,
  GiScrew,
  GiToolbox,
} from 'react-icons/gi';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaBuildingColumns } from 'react-icons/fa6';
import { GiDesk } from 'react-icons/gi';
import { BiSolidCabinet } from 'react-icons/bi';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import reception1 from '../assets/receptionDesks/reception1.JPG';
import reception2 from '../assets/receptionDesks/reception2.JPG';
import reception3 from '../assets/receptionDesks/reception3.JPG';
import reception4 from '../assets/receptionDesks/reception4.JPG';
import reception5 from '../assets/receptionDesks/reception5.JPG';
import reception6 from '../assets/receptionDesks/reception6.JPG';
import residential1 from '../assets/residentialMillwork/residential1.JPG';
import residential2 from '../assets/residentialMillwork/residential2.JPG';
import residential3 from '../assets/residentialMillwork/residential3.JPG';
import residential4 from '../assets/residentialMillwork/residential4.jpg';
import residential5 from '../assets/residentialMillwork/residential5.jpg';
import residential6 from '../assets/residentialMillwork/residential6.jpg';
import residential7 from '../assets/residentialMillwork/residential7.JPG';
import residential8 from '../assets/residentialMillwork/residential8.JPG';
import residential9 from '../assets/residentialMillwork/residential9.JPG';
import residential10 from '../assets/residentialMillwork/residential10.JPG';
import residential11 from '../assets/residentialMillwork/residential11.JPG';
import residential12 from '../assets/residentialMillwork/residential12.JPG';
import residential13 from '../assets/residentialMillwork/residential13.JPG';
import residential14 from '../assets/residentialMillwork/residential14.JPG';
import residential15 from '../assets/residentialMillwork/residential15.JPG';
import commercial1 from '../assets/commercialMillwork/commercial1.JPG';
import commercial2 from '../assets/commercialMillwork/commercial2.JPG';
import commercial3 from '../assets/commercialMillwork/commercial3.JPG';
import commercial4 from '../assets/commercialMillwork/commercial4.JPG';
import commercial5 from '../assets/commercialMillwork/commercial5.JPG';
import commercial6 from '../assets/commercialMillwork/commercial6.JPG';
import commercial7 from '../assets/commercialMillwork/commercial7.JPG';
import cabinetry1 from '../assets/customCabinetry/cabinetry1.JPG';
import cabinetry2 from '../assets/customCabinetry/cabinetry2.JPG';
import cabinetry3 from '../assets/customCabinetry/cabinetry3.JPG';
import cabinetry4 from '../assets/customCabinetry/cabinetry4.JPG';
import cabinetry5 from '../assets/customCabinetry/cabinetry5.JPG';
import cabinetry6 from '../assets/customCabinetry/cabinetry6.JPG';
import cabinetry7 from '../assets/customCabinetry/cabinetry7.JPG';
import cabinetry8 from '../assets/customCabinetry/cabinetry8.JPG';
import cabinetry9 from '../assets/customCabinetry/cabinetry9.JPG';

function ServicesGallery() {
  //gallery data
  const galleries = [
    {
      title: 'Commercial Millwork',
      defaultImage: HiMiniBuildingOffice2,
      subGallery: [
        `${commercial1}`,
        `${commercial2}`,
        `${commercial3}`,
        `${commercial4}`,
        `${commercial5}`,
        `${commercial6}`,
        `${commercial7}`,
      ],
    },
    {
      title: 'Residential Millwork',
      defaultImage: BsFillHouseDoorFill,
      subGallery: [
        `${residential1}`,
        `${residential2}`,
        `${residential3}`,
        `${residential4}`,
        `${residential5}`,
        `${residential6}`,
        `${residential7}`,
        `${residential8}`,
        `${residential9}`,
        `${residential10}`,
        `${residential11}`,
        `${residential12}`,
        `${residential13}`,
        `${residential14}`,
        `${residential15}`,
      ],
    },
    {
      title: 'Custom Cabinetry',
      defaultImage: BiSolidCabinet,
      subGallery: [
        `${cabinetry1}`,
        `${cabinetry2}`,
        `${cabinetry3}`,
        `${cabinetry4}`,
        `${cabinetry5}`,
        `${cabinetry6}`,
        `${cabinetry7}`,
        `${cabinetry8}`,
        `${cabinetry9}`,
      ],
    },
    {
      title: 'Reception Desks',
      defaultImage: GiDesk,
      subGallery: [
        `${reception1}`,
        `${reception2}`,
        `${reception3}`,
        `${reception4}`,
        `${reception5}`,
        `${reception6}`,
      ],
    },
  ];

  //state
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  //click handlers
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

  return (
    <Box>
      <HStack spacing={16}>
        {galleries.map((gallery, idx) => (
          <>
            <Box px={0} color="white">
              <Center>
                <VStack
                  spacing={4} // spacing between child elements for visual clarity
                  cursor="pointer" // indicate that it's hoverable
                  transition="color 0.35s, border-color 0.35s" // smooth transitions
                  _hover={{
                    color: 'teal.300',
                    '.text-on-hover': { color: 'teal.300' },
                  }} // targeting text on hover with a classname
                  onClick={() => handleImageClick(gallery.subGallery, idx)}
                >
                  <Box
                    display="inline-block"
                    position="relative"
                    borderRadius="40%"
                    borderWidth="8px"
                    borderColor="currentColor" // Inherit the color from the parent VStack
                    p="10px"
                  >
                    <Icon
                      as={gallery.defaultImage}
                      boxSize={20}
                      className="services-icon"
                      color="currentColor"
                    />
                  </Box>

                  <Text fontSize={'20px'} className="text-on-hover">
                    {gallery.title}
                  </Text>
                </VStack>
              </Center>
            </Box>
          </>
        ))}
      </HStack>

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

export default ServicesGallery;
