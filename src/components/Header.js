import { useState, useEffect } from 'react';
import { Box, Image, HStack, Button, Spacer } from '@chakra-ui/react';
import '../componentStyling/header.css';
import { primaryFont } from '../Fonts';

const Header = ({
  scrollToAbout,
  scrollToGallery,
  scrollToContact,
  scrollToServices,
  scrollToClients,
}) => {
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
            <Button bg="none" onClick={() => scrollToTop()}>
              HOME
            </Button>
            <Button bg="none" onClick={() => scrollToAbout()}>
              ABOUT
            </Button>
            <Button bg="none" onClick={() => scrollToGallery()}>
              GALLERY
            </Button>
            <Button bg="none" onClick={() => scrollToServices()}>
              SERVICES
            </Button>
            {/* <Button bg="none" onClick={() => scrollToClients()}>
              CLIENTS
            </Button> */}
            {/* <Button bg="none" onClick={() => scrollToClients()}>
              CAREERS
            </Button> */}
            <Button bg="none" onClick={() => scrollToContact()}>
              CONTACT
            </Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
