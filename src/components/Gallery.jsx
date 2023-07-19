
import React from 'react';
import Navber from './Navber.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import ImageGrid from './ImageGrid.jsx';
import AboutText from './AboutText.jsx';
import Window from './Window.jsx';
import FactorLogo from './FactorLogo.jsx';


// Import the images using require


function Gallery() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    '/images/image7.jpg',
    '/images/image8.jpg'
    
  ];
  

  return (
    <>
      <Navbar/>
      <div className="Page">
        <ImageGrid images={images} />
        <Window />
        <FactorLogo />
        </div>
        <MusicPlayer />
    </>
  )
}

export default Gallery