
import './App.css'
import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Releases from './Pages/Releases';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Redirector from './components/Redirector';


function App() {
  
  return (
    <>
      <BrowserRouter>
      <div className="App">
      
        <div className="Routes">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Releases" element={<Releases />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Redirector />
        </div>
  
      </div>
        </BrowserRouter>  
    </>
  )
}

export default App
