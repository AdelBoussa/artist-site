
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import MusicPlayer from '../components/MusicPlayer.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import AboutText from '../components/AboutText.jsx';
import Window from '../components/Window.jsx';
import FactorLogo from '../components/FactorLogo.jsx';


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