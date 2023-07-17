import React, { useEffect } from 'react';
import '../styles/TvStatic.css';
const TvStatic = () => {
  useEffect(() => {
    addNoise();
  }, []);

  const addNoise = () => {
    const noiseWrapper = document.querySelector('.noise-wrapper');
    noiseWrapper.style.opacity = '1';
  };

  return (
    <div className="tv-static">
      <div className="noise-wrapper">
        <div className="noise"></div>
      </div>
    </div>
  );
};

export default TvStatic;