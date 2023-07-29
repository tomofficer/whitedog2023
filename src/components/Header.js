import { useState, useEffect } from 'react';
import { Box, Image, HStack, Button, Spacer } from '@chakra-ui/react';
import '../componentStyling/header.css';

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToGallery,
  scrollToContact,
}) => {
  //state
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const bottomThreshold = documentHeight - windowHeight;

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
        // pos="sticky"
        // top={0}
        // zIndex={100}
        // bg="white"
        w="full"
      >
        <HStack px={{ base: 4, sm: 10, md: 20 }} py={{ base: 4, sm: 0, md: 4 }}>
          <Box>
            <Image
              src="https://ik.imagekit.io/v66nb6oaq/whitedoghorizontalblack_RvONxJlmc.png?updatedAt=1661297614806"
              w={{
                base: '150px',
                sm: '250px',
                md: '400',
              }}
            />
          </Box>
          <Spacer />
          <Box pt={20}>
            <Button bg="none" onClick={() => scrollToHome()}>
              Home
            </Button>
            <Button bg="none" onClick={() => scrollToAbout()}>
              About
            </Button>
            <Button bg="none" onClick={() => scrollToGallery()}>
              Gallery
            </Button>
            <Button bg="none" onClick={() => scrollToContact()}>
              Contact
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
