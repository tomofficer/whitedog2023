import { useState } from 'react';
import Modal from 'react-modal';
import '../componentStyling/gallery.css';
import {
  Box,
  Grid,
  HStack,
  CloseButton,
  Flex,
  Text,
  Image,
  Icon,
} from '@chakra-ui/react';
import { primaryFont, secondaryFont } from '../Fonts';
import '../componentStyling/global.css';
import { FaCircleChevronDown } from 'react-icons/fa6';
import sawLogo from '../assets/sawLogo.png';
import textLogo from '../assets/logoTextOnly.png';

const ImageGallery = ({ galleryRef }) => {
  //image data
  const galleryData = [
    {
      title: 'Hartford Hospital',
      location: 'Hartford, CT',
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },
    {
      title: 'Halford House',
      location: 'Long Island, NY',
      image:
        'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Jobsite%20Pictures/Halford%20House/IMG_3254_Qa_gi2yvxP.png?updatedAt=1690869564735',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },

    {
      title: 'Warner Theatre',
      location: 'Torrington, CT',
      image:
        'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Jobsite%20Pictures/Palmer%20Building/IMG_3240_Kly9-eTy2.png?updatedAt=1690869989943',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },
    {
      title: 'Palmer Building',
      location: 'Palmer, MA',
      image:
        'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Jobsite%20Pictures/Palmer%20Building/IMG_3250_3RGZ1OPnw.png?updatedAt=1690869993852',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
      ],
    },
    // {
    //   title: 'Placeholder Building',
    //   location: 'Brooklyn, NY',
    //   image:
    //     'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/thomas-drouault-Y1UtWeiRmhE-unsplash.jpg?updatedAt=1692849642683',
    //   relatedImages: [
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
    //   ],
    // },
    // {
    //   title: 'Placeholder Hospital',
    //   location: 'Springfield, MA',
    //   image:
    //     'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/cvzzn-uEzrfZKvVwA-unsplash.jpg?updatedAt=1692849781506',
    //   relatedImages: [
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
    //   ],
    // },
    // {
    //   title: 'Placeholder Building',
    //   location: 'Brooklyn, NY',
    //   image:
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
    //   relatedImages: [
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
    //   ],
    // },
    // {
    //   title: 'Placeholder Hospital',
    //   location: 'Springfield, MA',
    //   image:
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
    //   relatedImages: [
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/patrick-robert-doyle-OvXht_wi5Ew-unsplash_dEhch8ueo.jpg?updatedAt=1690600655926',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/davide-cantelli-e3Uy4k7ooYk-unsplash_qaQTgUjXW.jpg?updatedAt=1690600645524',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/inaki-del-olmo-NIJuEQw0RKg-unsplash_-6ZbpxdoU.jpg?updatedAt=1690600636071',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/aaron-huber-G7sE2S4Lab4-unsplash_pYXqHhePm.jpg?updatedAt=1690600592957',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lauren-mancke-rm5DbquteoY-unsplash_IqgME0dtk.jpg?updatedAt=1690600557169ated_image_url_5',
    //     'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/zac-gudakov-5QLCohwVndQ-unsplash_e_Z9iX5bz.jpg?updatedAt=1690600750853',
    //   ],
    // },
  ];

  const getLength = (index, data) => {
    data.map(() => {});
  };

  const companyLogo =
    'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitelogo_A1KeRKfjy.png?updatedAt=1690484186754';

  //state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  //modal handlers
  const openModal = (data, index) => {
    console.log(data);
    setSelectedImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  //carousel styling
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    mx: '10px',
    p: '16px',
    color: 'black',
    bg: 'white',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '10px 10px 10px 10px',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
      color: 'white',
    },
  };

  //carousel variables
  const slidesCount = 6;
  // const slidesCount = galleryData.length;

  //carousel handlers
  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };

  //carousel transitions
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  const bg =
    'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/benjamin-thomas-idEEZ-wQkfA-unsplash.jpg?updatedAt=1693888762658';

  return (
    <>
      {/* <div className="vertical-line-container">
        <div className="vertical-line"></div>
      </div> */}
      <Box ref={galleryRef}></Box>

      <Box
        pt={{ base: 4, sm: 0, md: '20px' }}
        pb={{ base: 4, sm: 0, md: 20 }}
        mt={{ base: 2, sm: 6, md: 20 }}
        px={{ base: 10, sm: 20, md: 36 }}
        bg="white"
        mb="120px"
      >
        <HStack justifyContent="center">
          <Image src={textLogo} w="auto" px="150px" />
        </HStack>
        <Text fontFamily={primaryFont} fontSize={'30px'}>
          A GALLERY OF OUR WORK
        </Text>
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={20}
          my={{ base: 6, sm: 10, md: 16 }}
        >
          {galleryData.map((data, index) => (
            <>
              <div
                key={index}
                className={`image-container ${
                  index % 2 === 0 ? 'slide-left' : 'slide-right'
                }`}
              >
                <img
                  style={{ borderRadius: '15px' }}
                  key={index}
                  src={data.image}
                  alt={`1 ${index + 1}`}
                  onClick={() => openModal(data, index)}
                />
                <div className="overlay" style={{ borderRadius: '15px' }}>
                  <img
                    src={companyLogo}
                    alt="White Dog Woodworking Logo"
                    // maxW={{ base: '100px', sm: '200px', md: '4xl' }}
                  />

                  <p className="image-title">{data.title}</p>
                </div>
              </div>
            </>
          ))}
        </Grid>

        <Icon
          as={FaCircleChevronDown}
          boxSize="70px"
          // color="#4DB6AC"
          color="black"
          _hover={{
            transform: 'scale(0.9)',
            transition: '0.3s',
            color: 'teal.400',
          }}
          mt="10px"
        />
      </Box>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            zIndex: 9999,
            position: 'fixed',
          },
          content: {
            position: 'absolute',
            zIndex: 10000,
            backgroundColor: '',
            border: 'none',
          },
        }}
        //disables scrolling while modal is open
        // bodyOpenClassName={'modal-open'}
        // htmlOpenClassName={'modal-open'}
      >
        {selectedImageIndex !== null && (
          <Box
            my={{ base: 4, sm: 0, md: 10 }}
            mt={{ base: 2, sm: 6, md: 10 }}
            px={{ base: 10, sm: 20, md: 10 }}
            zIndex={100}
          >
            <CloseButton
              onClick={closeModal}
              pos="absolute"
              top="0"
              right="0"
              // p="6"
            />
            {/* 
            original code -> clicked image, can remove or use if looks good
            <img src={galleryData[selectedImageIndex].image} alt="og img" /> */}
            {/* {galleryData[selectedImageIndex].relatedImages.map(
              (image, index) => (
                <img key={index} src={image} alt={`2 ${index + 1}`} />
              )
            )} */}

            <Flex
              // w={{ base: 'xl', sm: '4xl', md: '6xl' }
              // p={10}
              alignItems="center"
              justifyContent="center"
            >
              <Flex w="full" overflow="hidden" pos="relative">
                <Flex h="full" w="full" {...carouselStyle}>
                  {galleryData[selectedImageIndex].relatedImages.map(
                    (image, index) => (
                      <Box
                        key={`slide-${index}`}
                        maxH="80vh"
                        width="auto"
                        boxSize="full"
                        shadow="md"
                        flex="none"
                      >
                        <Text
                          color="white"
                          fontSize="xs"
                          p="8px 12px"
                          pos="absolute"
                          top="0"
                        >
                          {index + 1} / {slidesCount}
                        </Text>
                        <Image
                          src={image}
                          alt="carousel image"
                          boxSize="full"
                          backgroundSize="cover"
                        />
                      </Box>
                    )
                  )}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                  &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                  &#10095;
                </Text>
              </Flex>
            </Flex>
          </Box>
        )}
      </Modal>
    </>
  );
};

export default ImageGallery;

//todo : troubleshoot gallery thumbnail sizing issues, not all pics are the same size and need to have height/width rules!
