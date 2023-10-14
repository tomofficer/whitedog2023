import { useNavigate } from 'react-router-dom';

import { primaryFont, secondaryFont } from '../Fonts';
import {
  HStack,
  Text,
  Image,
  Box,
  Spacer,
  Icon,
  VStack,
  Center,
} from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import '../componentStyling/careers.css';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { GiHammerNails, GiCircularSawblade, GiScrew } from 'react-icons/gi';

const Services2 = ({ servicesRef }) => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box mt={'-51px'} ref={servicesRef}></Box>

      <Box mt={'250px'} mb="250px" className="container">
        <Box className="background-image">
          <Image
            src="https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/benjamin-thomas-idEEZ-wQkfA-unsplash.jpg?updatedAt=1693888762658"
            alt="about"
          />
        </Box>

        <Box className="overlaycareers" px={24} pb="40px" pt="20px">
          <HStack>
            <Text
              fontFamily={primaryFont}
              fontSize={'6xl'}
              fontWeight={600}
              pr={{ base: 0, sm: 0, md: 0 }}
            >
              Services
            </Text>
            <Spacer />
            <Box px={40} color="white">
              <Box pt={10}>
                <Center>
                  <HStack spacing={20}>
                    <Center>
                      <VStack
                        spacing={4} // spacing between child elements for visual clarity
                        cursor="pointer" // indicate that it's hoverable
                        transition="color 0.35s, border-color 0.35s" // smooth transitions
                        _hover={{
                          color: 'teal.300',
                          '.text-on-hover': { color: 'teal.300' },
                        }} // targeting text on hover with a classname
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
                            as={GiHammerNails}
                            boxSize={28}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Commercial
                        </Text>
                      </VStack>
                    </Center>
                    <Center>
                      <VStack
                        spacing={4} // spacing between child elements for visual clarity
                        cursor="pointer" // indicate that it's hoverable
                        transition="color 0.35s, border-color 0.35s" // smooth transitions
                        _hover={{
                          color: 'teal.300',
                          '.text-on-hover': { color: 'teal.300' },
                        }} // targeting text on hover with a classname
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
                            as={GiScrew}
                            boxSize={28}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Residential
                        </Text>
                      </VStack>
                    </Center>
                    <Center>
                      <VStack
                        spacing={4} // spacing between child elements for visual clarity
                        cursor="pointer" // indicate that it's hoverable
                        transition="color 0.35s, border-color 0.35s" // smooth transitions
                        _hover={{
                          color: 'teal.300',
                          '.text-on-hover': { color: 'teal.300' },
                        }} // targeting text on hover with a classname
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
                            as={GiCircularSawblade}
                            boxSize={28}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Institutional
                        </Text>
                      </VStack>
                    </Center>
                  </HStack>
                </Center>
              </Box>
              {/* <a href="/about-us">
                <Button
                  fontStyle={secondaryFont}
                  bg="none"
                  border="2px"
                  color="white"
                  fontSize={'md'}
                  fontWeight={0}
                  px={10}
                  mt={6}
                  _hover={{
                    color: 'teal.300',
                  }}
                >
                  Learn More
                </Button>
              </a> */}
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Services2;
