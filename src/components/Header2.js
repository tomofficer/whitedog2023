import { HStack, Box, Image, Spacer, Button } from '@chakra-ui/react';
import logoTextOnly from '../assets/logoTextOnly.png';

const Header2 = () => {
  return (
    <>
      <Box
        mt="40px"
        mx="50px"
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={4}
        bg=""
        // backdropFilter="blur(8px)"
        rounded="68px"
        boxShadow="xl" // Optionally add a shadow for more depth
      >
        <HStack
          pl={{ base: 4, sm: 10, md: 20 }}
          pr={{ base: 4, sm: 10, md: 16 }}
          py={{ base: 4, sm: 0, md: 0 }}
        >
          <Box>
            <Image
              src={logoTextOnly}
              w={{
                base: '150px',
                sm: '250px',
                md: '200px',
              }}
            />
          </Box>
          <Spacer />
          <Box pt={0}>
            <Button bg="none">HOME</Button>
            <Button bg="none">GALLERY</Button>
            <Button bg="none">ABOUT</Button>
            <Button bg="none">SERVICES</Button>
            <Button bg="none">CONTACT</Button>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header2;
