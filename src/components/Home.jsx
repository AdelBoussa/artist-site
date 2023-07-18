

import React from 'react';
import Navbar from './Navbar.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import ImageGrid from './ImageGrid.jsx';
import AboutText from './AboutText';
import Window from './window.jsx';
import '../styles/Page.css'
import FactorLogo from './FactorLogo.jsx';
// Import the images using require


function Home() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg'
    
  ];
  

  return (
    <>
        <Navbar/>
        <div className="Page">
        <AboutText />
        <Window />
        <ImageGrid images={images} />
        <FactorLogo />
        </div>
        <MusicPlayer />
    </>
  )
}

export default Home



