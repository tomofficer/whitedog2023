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
      <Box mt={0}></Box>

      <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div>
      <Box py={{ base: 4, sm: 0, md: 4 }} mt={{ base: 2, sm: 6, md: 28 }}>
        <div className={`slide-in-left ${slideInLeft ? 'visible' : ''}`}>
          {/* INSERT CAREERS HEADING HERE ONCE SLIDE FUNCTIONALITY IS FIXED */}
        </div>
        <Heading mt={20} fontFamily={primaryFont}>
          CAREERS
        </Heading>
      </Box>
      <Box px={20} pt={10}>
        <Center>
          <VStack maxW={'3xl'} spacing={12}>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              in quia cum provident aut. Quis, odit omnis perferendis mollitia
              facere nostrum quia laudantium ullam pariatur laboriosam tenetur
              odio ab error minima quisquam magni, provident libero et nihil
              quos nulla. Sequi. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Iusto, eos!
            </Text>
            <Image
              mt={4}
              maxH="500px"
              src="https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/whiteDogTeamPhoto.jpeg?updatedAt=1692852084867"
              alt="Team Photo"
            />
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Careers;
