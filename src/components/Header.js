import { useState, useEffect } from 'react';
import { Box, Image, HStack, Button, Spacer } from '@chakra-ui/react';
import '../componentStyling/header.css';
import { primaryFont } from '../Fonts';
import sawAndTextLogoBig from '../assets/sawAndTextLogoBig.png';

const Header = ({ scrollToAbout, scrollToGallery, scrollToServices }) => {
  //state
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //scroll handlers
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const bottomThreshold = documentHeight - windowHeight - 10;

      setShowNav(
        (currentScrollPos > prevScrollPos &&
          currentScrollPos >= bottomThreshold) ||
          currentScrollPos <= 0
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <Box
        className={`sticky ${showNav ? 'visible' : 'hidden'}`}
        w="full"
        fontFamily={primaryFont}
        bg="white"
      >
        <HStack
          pl={{ base: 4, sm: 10, md: 20 }}
          pr={{ base: 4, sm: 10, md: 16 }}
          py={{ base: 4, sm: 0, md: 4 }}
        >
          <Box>
            <Image
              src={sawAndTextLogoBig}
              w={{
                base: '150px',
                sm: '250px',
                md: '400',
              }}
            />
          </Box>
          <Spacer />
          <Box pt={10}>
            <Button bg="none" onClick={() => scrollToTop()}>
              HOME
            </Button>
            <Button bg="none" onClick={() => scrollToGallery()}>
              GALLERY
            </Button>
            <Button bg="none" onClick={() => scrollToServices()}>
              SERVICES
            </Button>
            <Button bg="none" onClick={() => scrollToAbout()}>
              ABOUT
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
