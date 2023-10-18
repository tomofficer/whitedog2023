import {
  HStack,
  Box,
  Image,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logoTextOnly from '../assets/logoTextOnly.png';
import { useState, useEffect } from 'react';

const Header2 = ({
  scrollToAbout,
  scrollToGallery,
  scrollToServices,
  scrollToContact,
}) => {
  const [loaded, setLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          pl={{ base: 4, sm: 10, md: 20 }}
          pr={{ base: 4, sm: 10, md: 16 }}
          py={{ base: 4, sm: 0, md: 0 }}
        >
          <Box>
            <Image
              src={logoTextOnly}
              w={{ base: '150px', sm: '250px', md: '200px' }}
            />
          </Box>
          <Spacer />
          <Box display={{ base: 'none', sm: 'flex', md: 'flex' }}>
            {/* Desktop Buttons */}
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
          <IconButton
            display={{ base: 'flex', sm: 'none', md: 'none' }}
            aria-label="Open menu"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        </HStack>

        {/* Drawer for Mobile */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                <Button
                  bg="none"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => {
                    scrollToGallery();
                    onClose();
                  }}
                >
                  GALLERY
                </Button>
                <Button
                  bg="none"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => {
                    scrollToServices();
                    onClose();
                  }}
                >
                  SERVICES
                </Button>
                <Button
                  bg="none"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => {
                    scrollToAbout();
                    onClose();
                  }}
                >
                  ABOUT
                </Button>
                <Button
                  bg="none"
                  _hover={{ transform: 'scale(1.05)' }}
                  onClick={() => {
                    scrollToContact();
                    onClose();
                  }}
                >
                  CONTACT
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Header2;
