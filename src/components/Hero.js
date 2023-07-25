import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const Hero = () => {
  return (
    <>
      <Box px={{ base: 4, sm: 10, md: 20 }}>
        <Image src="https://ik.imagekit.io/v66nb6oaq/heroplaceholder_soWY5gYGs.jpg?updatedAt=1690260703745" />
      </Box>
    </>
  );
};

export default Hero;
