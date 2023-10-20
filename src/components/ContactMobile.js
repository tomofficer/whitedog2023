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
import { primaryFont, secondaryFont, tertiaryFont } from '../Fonts';
import '../componentStyling/global.css';
import sawLogo from '../assets/sawLogo.png';
import textOnlyLogo from '../assets/logoTextOnly.png';
import ig from '../assets/insta.png';

const ContactMobile = () => {
  return (
    <>
      <Box className="fade-in2" overflow="hidden" bg="white">
        <Center>
          <Box
            w="100%"
            py={{ base: 0, sm: 0, md: 0 }}
            mx={{ base: '20px', sm: 0, md: 0 }}
          >
            <Box bg="white" pt="30px">
              <Grid
                templateColumns="repeat(1, 1fr)"
                gap={20}
                pt={{ base: '', sm: '', md: '80px' }}
                pb={{ base: '', sm: '', md: '30px' }}
                mt={{ base: 6, sm: 10, md: 0 }}
              >
                <Center>
                  <VStack mt="0px">
                    <Image maxW="350px" src={textOnlyLogo} />

                    <Image maxW="350px" src={sawLogo} />
                  </VStack>
                </Center>
                <Flex direction="column">
                  <VStack textAlign={'center'}>
                    <Box fontFamily={tertiaryFont}>
                      <Text fontSize="22px">
                        59 Field Street, Suite 140
                        <br />
                        Torrington, CT 06790
                      </Text>
                      <Text mt="10px" fontSize="22px">
                        Tel: 860-482-3776
                        <br />
                        Cell: 860-201-3345
                      </Text>
                      <Text fontSize="20px" mt="10px">
                        Email : <br />
                        andy@whitedogwoodworking.com
                      </Text>
                    </Box>
                    <Center>
                      <Heading
                        fontFamily={primaryFont}
                        fontSize="40px"
                        mb="20px"
                        mt="40px"
                      >
                        CONTACT
                      </Heading>
                    </Center>
                    <ContactForm />
                    <Center>
                      <VStack mt="80px" mb="60px">
                        <a
                          href="https://www.instagram.com/white_dog_woodworking/?hl=en"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={ig} maxW="60px" />
                        </a>
                        <Text
                          fontFamily={tertiaryFont}
                          // fontWeight="900"
                          fontSize="18px"
                          mt="5px"
                        >
                          Follow us on Instagram!
                        </Text>
                      </VStack>
                    </Center>
                  </VStack>
                </Flex>
              </Grid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default ContactMobile;
