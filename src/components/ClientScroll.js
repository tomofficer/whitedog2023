import React from 'react';
import '../componentStyling/clientScroll.css';
import { Box, Grid, GridItem } from '@chakra-ui/react';

function ClientScroll() {
  //array of logos
  const clientLogos = [
    {
      title: 'Warner Theatre',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/warnerTheatre.jpeg?updatedAt=1692757016242',
    },
    {
      title: 'Hartford Hospital',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/hartfordHospital.png?updatedAt=1692757127818',
    },
    {
      title: 'Torrington Savings Bank',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/torringtonBank.png?updatedAt=1692757191862',
    },
    {
      title: 'KidsPlay Museum',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/kidsPlayMuseum.jpeg?updatedAt=1692757269824',
    },
    {
      title: 'NYC Hospital',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/nycHospital.jpeg?updatedAt=1692757765646',
    },
    {
      title: 'AMC Theatres',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/amcTheatres.png?updatedAt=1692757816542',
    },
    {
      title: 'Torrington Library',
      src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/torringtonLibrary.png?updatedAt=1692757860040',
    },
    {
      title: 'Danbury Childrens',
      src: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/childrens_EsRwi_DX4.png?updatedAt=1693110430001',
    },
    {
      title: 'First National Bank',
      src: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/fnb_fTqg5ZnJ9.png?updatedAt=1693110504250',
    },
  ];

  //concatenated array to produce looping effect
  const extendedClientLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Box>
      {/* <div className="clients-section">
      {extendedClientLogos.map((logo, index) => (
        <div
          key={index}
          // className="client-logo"
        >
          <img src={logo.src} alt={logo.title} />
        </div>
      ))}
      </div> */}
    </>
  );
}

export default ClientScroll;
