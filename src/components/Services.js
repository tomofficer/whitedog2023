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

const Services = () => {
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
      <Box
        position="relative"
        minHeight="100vh"
        mt={{ base: '', sm: '', md: '250px' }}
        mb={{
          base: '',
          sm: '',
          md: '110px',
        }}
      >
        {/* Background Image Box */}
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          background={`url('https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/benjamin-thomas-idEEZ-wQkfA-unsplash.jpg?updatedAt=1693888762658') center/cover no-repeat`}
          zIndex="-1"
        />

        {/* Content */}
        <Box
          color="white"
          py={{ base: 4, sm: 0, md: 4 }}
          mt={{ base: 2, sm: 6, md: 10 }}
          zIndex="2"
        >
          <div className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}>
            <Heading mt={20} fontFamily={primaryFont}>
              SERVICES
            </Heading>
          </div>

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
                      borderColor="white"
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
                      <Icon
                        as={GiScrew}
                        boxSize={28}
                        className="services-icon"
                      />
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
                Custom architectural millwork. <br />
                Custom cabinetry. <br />
                Custom corian countertops. <br />
              </Text>
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default Services;
