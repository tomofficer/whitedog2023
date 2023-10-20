import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Grid,
  Image,
  Flex,
  VStack,
  Text,
  Icon,
  Center,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react';
import ContactForm from './ContactForm';
import {
  // FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';
import Header from './Header';
import sawLogo from '../assets/sawLogo.png';

const Contact = ({
  scrollToAbout,
  scrollToServices,
  scrollToGallery,
  contactRef,
}) => {
  //slide handlers
  const [slideInLeft, setSlideInLeft] = useState(false);
  const [slideInRight, setSlideInRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Calculate the scroll position where you want the animations to trigger
      // In this example, we are triggering the animations when the user scrolls to the bottom 20% of the page
      const triggerPoint = bodyHeight - windowHeight * 1.5;

      // Update the state based on the scroll position
      setSlideInLeft(scrollY > triggerPoint);
      setSlideInRight(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isLargeScreen] = useMediaQuery('(min-width: 1500px)');

  const imageMargin = isLargeScreen ? '300px' : '90px';
  const imageMarginTop = isLargeScreen ? '100px' : '70px';
  const imagePadding = isLargeScreen ? '0px' : '0px';
  const imagePaddingBtm = isLargeScreen ? '0px' : '0px';

  return (
    <>
      <Box className="fade-in2" overflow="hidden" bg="white" mt="100px">
        <Header
          mt={imageMarginTop}
          scrollToAbout={scrollToAbout}
          scrollToServices={scrollToServices}
          scrollToGallery={scrollToGallery}
        />
        <Center>
          <Box
            w="100%"
            // py={{ base: 4, sm: 0, md: 0 }}
            mt={imagePadding}
            px={{ base: 4, sm: 0, md: 0 }}
            pb={imagePaddingBtm}
          >
            <Box bg="white" py={{ base: 4, sm: 0, md: 0 }}>
              <Grid
                templateColumns={{
                  base: '',
                  md: 'repeat(3, 1fr)',
                  xl: 'repeat(3, minmax(0, max-content))',
                }}
                justifyContent="center"
                alignItems="center"
                gap={20}
                pt={imageMarginTop}
                pb={{ base: '', sm: '', md: '30px' }}
                // mt={{ base: 6, sm: 10, md: 0 }}
              >
                <Flex
                  direction="column"
                  className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}
                >
                  <div ref={contactRef}></div>
                  <VStack textAlign={'left'}>
                    <Heading
                      pr={32}
                      fontFamily={primaryFont}
                      mb={{ base: 0, sm: 0, md: 10 }}
                    >
                      CONTACT
                    </Heading>
                    <Box fontFamily={secondaryFont} fontWeight={900}>
                      <Text mb={{ base: 0, sm: 0, md: 6 }}>
                        59 Field Street, Suite 140
                        <br />
                        Torrington, CT 06790
                      </Text>
                      <Text mb={{ base: 0, sm: 0, md: 8 }}>
                        Tel: 860-482-3776
                        <br />
                        Cell: 860-201-3345
                      </Text>
                      <Text mb={{ base: 0, sm: 0, md: 8 }}>
                        andy.officer@whitedogwoodworking.com
                      </Text>
                      <HStack>
                        <a
                          href="https://www.instagram.com/white_dog_woodworking/?hl=en"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon as={FaInstagram} boxSize={8} />
                        </a>
                        <Text mb={0} fontSize={'md'}>
                          : Follow us on Instagram!
                        </Text>
                      </HStack>
                    </Box>
                  </VStack>
                </Flex>

                <Image maxW="350px" src={sawLogo} mx={imageMargin} />
                <Box
                  className={`slide-in-right ${slideInRight ? 'visible' : ''}`}
                >
                  <ContactForm />
                </Box>
              </Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Contact;
