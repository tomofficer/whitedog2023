import { useState } from 'react';
import { Box, Heading, Grid, Image } from '@chakra-ui/react';

const Gallery = () => {
  //gallery thumbnails
  const images = [
    {
      img: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
      title: 'image1',
    },
    {
      img: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
      title: 'image2',
    },
    {
      img: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
      title: 'image3',
    },
    {
      img: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
      title: 'image4',
    },
  ];

  //state
  const [carouselOpen, setCarouselOpen] = useState('closed');

  //click handle
  const imgClick = () => {
    setCarouselOpen('open');
    console.log('carousel is now open');
  };

  return (
    <>
      {carouselOpen === 'open' && (
        <>
          <Box>
            <Image src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106" />
          </Box>
        </>
      )}
      <Box
        py={{ base: 4, sm: 0, md: 4 }}
        mt={{ base: 2, sm: 6, md: 28 }}
        px={{ base: 10, sm: 20, md: 36 }}
      >
        <Heading>Gallery</Heading>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={20}
          my={{ base: 6, sm: 10, md: 24 }}
        >
          <Image
            src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418"
            onClick={imgClick}
          />
          <Image src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418" />
          <Image src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418" />
          <Image src="https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418" />
        </Grid>
      </Box>
    </>
  );
};

export default Gallery;
