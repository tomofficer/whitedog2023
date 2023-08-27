// ImageGrid.js
import React from 'react';

const images = [
  {
    id: 1,
    src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/warnerTheatre.jpeg?updatedAt=1692757016242',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/hartfordHospital.png?updatedAt=1692757127818',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/nycHospital.jpeg?updatedAt=1692757765646',
    alt: 'Image 3',
  },

  {
    id: 6,
    src: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/hartford_VKRB5IOT4.jpeg?updatedAt=1693111601126',
    alt: 'Image 6',
  },

  {
    id: 4,
    src: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/lakewood-landing-logo_uUXkw3tB1.svg?updatedAt=1693111801440',
    alt: 'Image 4',
  },
  {
    id: 7,
    src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/kidsPlayMuseum.jpeg?updatedAt=1692757269824',
    alt: 'Image 7',
  },
  {
    id: 5,
    src: 'https://ik.imagekit.io/v66nb6oaq/White%20Dog%20Woodworking/childrens_EsRwi_DX4.png?updatedAt=1693110430001',
    alt: 'Image 5',
  },

  {
    id: 8,
    src: 'https://ik.imagekit.io/zmra7ttrd/White%20Dog%20Woodworking%20Website/Client%20Logos/torringtonBank.png?updatedAt=1692757191862',
    alt: 'Image 8',
  },
];

const ImageGrid = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
      }}
    >
      {images.map(image => (
        <div
          key={image.id}
          style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
