import { useNavigate } from 'react-router-dom';
import { primaryFont, secondaryFont, tertiaryFont } from '../Fonts';
import { HStack, Image, Box, Icon, Center } from '@chakra-ui/react';
// import { FaCircleChevronDown } from 'react-icons/bs';
import { FaCircleChevronDown } from 'react-icons/fa6';

import topHero from '../assets/topHero.jpg';
import sawLogo from '../assets/sawLogo.png';
import textLogo from '../assets/logoTextOnly.png';
import Header2 from './Header2';

const Landing = () => {
  //back btn logic
  const navigate = useNavigate();

  return (
    <>
      <Box
        mt={0}
        position="relative"
        height="100vh"
        width="100%"
        overflow="hidden"
        borderBottom="10px solid #4DB6AC"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          height="100%"
          width="100%"
          backgroundSize="cover"
          backgroundPosition="center"
          zIndex="1"
        >
          <Image src={topHero} alt="top hero" />
        </Box>
        <Header2 />

        <Box
          px="250px"
          pt="20px"
          position="absolute"
          top="40%"
          left="0"
          w="100%"
          height="3in"
          backgroundColor="rgba(128, 128, 128, 0.5)"
          zIndex="2"
        >
          <HStack justifyContent="center">
            <Image src={sawLogo} w="250px" />

            <Box pl={'100px'}>
              <Image src={textLogo} w="400px" />
              {/* <Button
                fontStyle={secondaryFont}
                bg="none"
                border="2px"
                color="black"
                fontSize={'md'}
                fontWeight={0}
                px={10}
                mt={6}
                _hover={{
                  color: 'teal.300',
                }}
              >
                View Gallery
              </Button> */}
            </Box>
          </HStack>
        </Box>
        <Center>
          <Box
            p={4}
            position="absolute"
            top="90%"
            background="transparent"
            border="none"
            fontSize="1.5em"
            color="white"
            cursor="pointer"
            zIndex="3"
          >
            <Icon
              as={FaCircleChevronDown}
              boxSize="50px"
              color="#4DB6AC"
              _hover={{ color: 'teal', transform: 'scale(0.95)' }}
              onClick={() => {
                navigate(-1);
              }}
            />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Landing;
