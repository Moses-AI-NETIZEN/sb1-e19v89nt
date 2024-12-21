import React from 'react';

const images = [
  {
    url: "https://example.com/headband-gray.jpg",
    alt: "Gray EcoBud Headband"
  },
  {
    url: "https://example.com/headband-blue.jpg",
    alt: "Blue EcoBud Headband"
  },
  {
    url: "https://example.com/headband-sleep.jpg",
    alt: "EcoBud Headband in use while sleeping"
  }
];

export function ProductImages() {
  const [mainImage, setMainImage] = React.useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img 
          src={mainImage.url}
          alt={mainImage.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-square rounded-lg overflow-hidden ${
              mainImage.url === image.url ? 'ring-2 ring-green-500' : ''
            }`}
          >
            <img 
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}