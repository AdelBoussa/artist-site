import React from 'react';
import '../styles/ImageGrid.css';
const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="image-grid-item" />
      ))}
    </div>
  );
};

export default ImageGrid;