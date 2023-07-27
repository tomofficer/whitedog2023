import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace this with an array of image URLs you want to display
  const images = [
    'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedog1_-DJZlIxPp.jpg?updatedAt=1690484185418',
    'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/whitedogyellow_FjuzcgAFm.png?updatedAt=1690484221106',
    // Add more image URLs as needed
  ];

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
