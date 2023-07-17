import React from 'react';
import Navbar from '../components/Navbar';
import MusicPlayer from '../components/MusicPlayer';
import ImageGrid from '../components/ImageGrid';
import AboutText from '../components/AboutText';
import FactorLogo from '../components/FactorLogo';


// Import the images using require


function Releases() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg'
    
  ];
  //<ImageGrid images={images} />

  return (
    <>
      
        <Navbar/>
        <div className="Page">
        <h4>Looks like there's nothing here...</h4>
            <FactorLogo />
        </div>
        <MusicPlayer />
    </>
  )
}

export default Releases