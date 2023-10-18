import { HStack, Box, Image, Spacer, Button } from '@chakra-ui/react';
import logoTextOnly from '../assets/logoTextOnly.png';
import { useState, useEffect } from 'react';

const Header2 = ({
  scrollToAbout,
  scrollToGallery,
  scrollToServices,
  scrollToContact,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Box
        className={loaded ? 'fade-in' : ''}
        mt="40px"
        mx="50px"
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={4}
        backgroundColor="rgba(128, 128, 128, 0.2)"
        rounded="68px"
        boxShadow="xl"
      >
        <HStack
          justifyContent={{ base: 'center', md: 'space-between' }}
          pl={{ base: 4, sm: 10, md: 20 }}
          pr={{ base: 4, sm: 10, md: 16 }}
          py={{ base: 4, sm: 0, md: 0 }}
        >
          {/* Logo always visible */}
          <Image
            src={logoTextOnly}
            w={{ base: '150px', sm: '250px', md: '200px' }}
          />

          {/* Desktop Buttons */}
          <Box display={{ base: 'none', md: 'flex' }}>
            <Button
              bg="none"
              _hover={{ transform: 'scale(1.05)' }}
              onClick={scrollToGallery}
            >
              GALLERY
            </Button>
            <Button
              bg="none"
              _hover={{ transform: 'scale(1.05)' }}
              onClick={scrollToServices}
            >
              SERVICES
            </Button>
            <Button
              bg="none"
              _hover={{ transform: 'scale(1.05)' }}
              onClick={scrollToAbout}
            >
              ABOUT
            </Button>
            <Button
              bg="none"
              _hover={{ transform: 'scale(1.05)' }}
              onClick={scrollToContact}
            >
              CONTACT
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header2;
