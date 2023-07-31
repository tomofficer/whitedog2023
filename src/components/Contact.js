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
} from '@chakra-ui/react';
import ContactForm from './ContactForm';
import {
  // FaFacebook,
  FaInstagram,
} from 'react-icons/fa6';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';

const Contact = ({ contactRef }) => {
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

  return (
    <>
      <Center>
        <Box
          py={{ base: 4, sm: 0, md: 0 }}
          px={{ base: 4, sm: 0, md: 20 }}
          mt={{ base: 2, sm: 6, md: 24 }}
          mb={{ base: 2, sm: 6, md: 14 }}
        >
          <Box bg="white" py={{ base: 4, sm: 0, md: 0 }}>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={20}
              mt={{ base: 6, sm: 10, md: 24 }}
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
                      andy@whitedogwoodworking.com
                    </Text>
                    <a
                      href="https://www.instagram.com/white_dog_woodworking/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon as={FaInstagram} boxSize={8} />
                    </a>
                  </Box>
                </VStack>
              </Flex>

              <Image
                mx={10}
                maxW="350px"
                src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogblack_Je04hqCmN.png?updatedAt=1690484225404"
              />
              <Box
                className={`slide-in-right ${slideInRight ? 'visible' : ''}`}
              >
                <ContactForm />
              </Box>
            </Grid>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Contact;
