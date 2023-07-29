import React from 'react';
import { Box, Image, HStack, Button, Spacer } from '@chakra-ui/react';

const Header = ({
  scrollToHome,
  scrollToAbout,
  scrollToGallery,
  scrollToContact,
}) => {
  return (
    <>
      <Box pos="relative" w="full">
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
