import React, { useState } from 'react';
import './Gallery.css';

// Import the images correctly
import afrosoul from './Photos/afrosoul.png';


const images = [
  afrosoul,  // Use the imported image variable here
  afrosoul,  // Use the imported image variable here
  afrosoul,  // Use the imported image variable here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-container ${
              currentIndex === index ? 'active' : ''
            }`}
            onClick={() => handleImageClick(index)}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <button onClick={handlePrev} className="prev-button">
        &#60;
      </button>
      <button onClick={handleNext} className="next-button">
        &#62;
      </button>
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
