import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Replace this with an array of objects containing image URLs and their related images
  const galleryData = [
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/default-image.jpg?updatedAt=1690484194942',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
      ],
    },
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/heroplaceholder_soWY5gYGs.jpg?updatedAt=1690484219756',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedoglogotranswithtextarial_okVTYzCTb.png?updatedAt=1690484188099',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogblacklong2_bg3OtwnkH.png?updatedAt=1690484222390',
      ],
    },
    {
      image:
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
      relatedImages: [
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
        'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
      ],
    },
    // Add more data objects as needed
  ];

  const openModal = index => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery-container">
        {galleryData.map((data, index) => (
          <img
            key={index}
            src={data.image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal">
        {selectedImageIndex !== null && (
          <div>
            <img
              src={galleryData[selectedImageIndex].image}
              alt="Selected Image"
            />
            <div className="related-images">
              {galleryData[selectedImageIndex].relatedImages.map(
                (image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Related Image ${index + 1}`}
                  />
                )
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageGallery;
