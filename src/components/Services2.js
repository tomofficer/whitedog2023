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
import {
  GiHammerNails,
  GiCircularSawblade,
  GiScrew,
  GiToolbox,
} from 'react-icons/gi';
import servicesSectionBg from '../assets/servicesSectionBg.jpg';
import { FaCircleChevronDown } from 'react-icons/fa6';
import ServicesGallery from './ServicesGallery';

const Services2 = ({ servicesRef, scrollToAbout }) => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box mt={'275px'} mb="250px" className="container">
        <Box className="background-image">
          <Box ref={servicesRef}></Box>

          <Image src={servicesSectionBg} alt="about" />
        </Box>

        <Box className="overlaycareers" px={24} pb="0px" pt="20px">
          <HStack>
            <Text
              fontFamily={primaryFont}
              fontSize={'6xl'}
              fontWeight={600}
              pr={{ base: 0, sm: 0, md: 20 }}
            >
              Services
            </Text>
            <Spacer />

            <ServicesGallery />

            {/* <Box px={40} color="white">
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
                            boxSize={20}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Commercial Millwork
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
                            boxSize={20}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Residential Millwork
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
                            boxSize={20}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Reception Desks
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
                            as={GiToolbox}
                            boxSize={20}
                            className="services-icon"
                            color="currentColor" // Inherit the color from the parent VStack
                          />
                        </Box>
                        <Text fontSize={'20px'} className="text-on-hover">
                          Wall Paneling
                        </Text>
                      </VStack>
                    </Center>
                  </HStack>
                </Center>
              </Box>
            </Box> */}
          </HStack>
        </Box>
        <Icon
          as={FaCircleChevronDown}
          boxSize="70px"
          color="black"
          _hover={{
            transform: 'scale(0.9)',
            transition: '0.3s',
            color: 'teal.400',
          }}
          position="relative"
          top="88%"
          zIndex={10}
          onClick={() => scrollToAbout()}
        />
      </Box>
    </>
  );
};

export default Services2;
