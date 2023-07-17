

import React from 'react';
import Navbar from '../components/Navbar';
import MusicPlayer from '../components/MusicPlayer';
import ImageGrid from '../components/ImageGrid';
import AboutText from '../components/AboutText';
import ContactFrom from '../components/ContactForm';
import FactorLogo from '../components/FactorLogo';

// Import the images using require


function Contact() {
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
        
        <ContactFrom />
        
        <FactorLogo />
        </div>
    <MusicPlayer />
          
    </>
  )
}

export default Contact