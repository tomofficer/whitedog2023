import { useState } from 'react';
import { primaryFont, secondaryFont } from '../Fonts';
import { Center, VStack, Text, Image } from '@chakra-ui/react';
import '../componentStyling/global.css';
import '../componentStyling/services.css';

import { Box, Heading } from '@chakra-ui/react';

const Careers = () => {
  //slide handlers
  const [slideInLeft, setSlideInLeft] = useState(false);
  const [slideInRight, setSlideInRight] = useState(false);

  return (
    <>
      <Box mt={0}>
        <Image
          src="https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/elmer-canas-7LR3-dhrrdo-unsplash.jpg?updatedAt=1693880907218"
          alt="careers"
        />
      </Box>
    </>
  );
};

export default Careers;
