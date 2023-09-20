import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Center,
  HStack,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';
import '../componentStyling/services.css';
import { GiHammerNails, GiCircularSawblade, GiScrew } from 'react-icons/gi';

const Services = ({ servicesRef }) => {
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
      const triggerPoint = bodyHeight - windowHeight * 4.2;

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
      <Box ref={servicesRef} mt={0}></Box>

      <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <div className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}>
          <Heading mt={20} fontFamily={primaryFont}>
            SERVICES
          </Heading>
        </div>
      </Box>
      <Box pt={10}>
        <Center>
          <HStack spacing={20}>
            <Center>
              <VStack>
                <Box
                  display="inline-block"
                  position="relative"
                  borderRadius="40%"
                  borderWidth="8px"
                  borderColor="#000000"
                  p="25px"
                >
                  <Icon
                    as={GiHammerNails}
                    boxSize={28}
                    className="services-icon"
                  />
                </Box>
                <Text fontSize={'2xl'}>Commercial</Text>
              </VStack>
            </Center>
            <Center>
              <VStack>
                <Box
                  display="inline-block"
                  position="relative"
                  borderRadius="40%"
                  borderWidth="8px"
                  borderColor="#000000"
                  p="25px"
                >
                  <Icon
                    as={GiCircularSawblade}
                    boxSize={28}
                    className="services-icon"
                  />
                </Box>
                <Text fontSize={'2xl'}>Industrial</Text>
              </VStack>
            </Center>
            <Center>
              <VStack>
                <Box
                  display="inline-block"
                  position="relative"
                  borderRadius="40%"
                  borderWidth="8px"
                  borderColor="#000000"
                  p="25px"
                >
                  <Icon as={GiScrew} boxSize={28} className="services-icon" />
                </Box>
                <Text fontSize={'2xl'}>Institutional</Text>
              </VStack>
            </Center>
          </HStack>
        </Center>
      </Box>
      <Center>
        <Box
          maxW={'2xl'}
          className={`slide-in-right ${slideInRight ? 'visible' : ''}`}
        >
          <Text
            textAlign={'center'}
            mt={{ base: 2, sm: 6, md: 14 }}
            fontFamily={secondaryFont}
            fontSize={'2xl'}
            fontWeight={900}
          >
            Custom architectural millwork for both commercial and residential.{' '}
            <br />
            Custom cabinetry designed both for home and office. <br />
            Custom designed corian countertops for kitchen, bath and office.
            <br />
          </Text>
        </Box>
      </Center>

      {/* <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div> */}
    </>
  );
};

export default Services;
