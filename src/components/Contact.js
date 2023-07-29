import React from 'react';
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
} from '@chakra-ui/react';
import ContactForm from './ContactForm';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';

const Contact = () => {
  return (
    <>
      <Box py={{ base: 4, sm: 0, md: 0 }} mt={{ base: 2, sm: 6, md: 20 }}>
        <Box bg="teal" py={{ base: 4, sm: 0, md: 10 }}>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={20}
            my={{ base: 6, sm: 10, md: 24 }}
          >
            <Flex direction="column">
              <Heading>Contact</Heading>

              <VStack>
                <Box textAlign={'left'}>
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
            <ContactForm />
            <Image
              maxW="sm"
              src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogblack_Je04hqCmN.png?updatedAt=1690484225404"
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
