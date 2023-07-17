
//import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import React from 'react';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import ImageGrid from './components/ImageGrid';
import AboutText from './components/AboutText';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Releases from './Pages/Releases';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Import the images using require


function App() {
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
      <BrowserRouter>
      <div className="App">
      <Navbar />
        <div className="Routes">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Releases" element={<Releases />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        
        
        
        </div>
        </BrowserRouter>  
    </>
  )
}

export default App
