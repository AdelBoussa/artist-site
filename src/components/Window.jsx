import React from 'react';
import '../styles/Window.css';

 const Window = () => {   return (
   <div className="window">
        <video className="video" autoPlay loop muted src='/images/video1.mp4'></video>
    </div>
  );
};

export default Window;