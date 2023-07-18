import React from 'react';
import Navbar from '../components/Navbar.jsx';
import MusicPlayer from '../components/MusicPlayer.jsx';
import ImageGrid from '../components/ImageGrid.jsx';
import AboutText from '../components/AboutText.jsx';
import FactorLogo from '../components/FactorLogo.jsx';


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