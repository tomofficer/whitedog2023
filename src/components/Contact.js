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
  HStack,
  Center,
} from '@chakra-ui/react';
import ContactForm from './ContactForm';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/contact.css';

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
          mt={{ base: 2, sm: 6, md: 20 }}
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
                justifyContent={'center'}
                className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}
              >
                <div ref={contactRef}></div>
                <Heading fontFamily={primaryFont}>CONTACT</Heading>

                <VStack>
                  <Box
                    textAlign={'left'}
                    fontFamily={secondaryFont}
                    fontWeight={900}
                  >
                    <Text>
                      500 Main Street,
                      <br />
                      Torringonton, CT 06750
                    </Text>
                    <Text>
                      Tel: 860-459-9876
                      <br />
                      Fax: 860-987-4530
                    </Text>
                    <Text>andy@whitedogwoodworking.com</Text>
                  </Box>

                  <HStack>
                    <Icon as={FaFacebook} />
                    <Icon as={FaInstagram} />
                  </HStack>
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
