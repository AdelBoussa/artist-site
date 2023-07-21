import React, { useEffect, useState } from 'react';
import '../styles/MusicPlayer.css';

const MusicPlayer = () => {
  const songs = ['100_VintageDrums_01_TL', '100_VintageDrums_02_TL', '100_VintageDrums_03_TL', '100_VintageDrums_04_TL'];
  const [songIndex, setSongIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    loadSong(audio, songs[songIndex]);

    // Clean up the audio element when the component unmounts
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [songIndex]);

  const loadSong = (audio, song) => {
    audio.src = `../assets/sounds/${song}.wav`;
    const fileName = song.split('/').pop().split('.').slice(0, -1).join('.');
    document.getElementById('title').innerText = fileName;
    if (isPlaying) {
      audio.play();
    }
  };

  const playSong = () => {
    setIsPlaying(true);
    const audio = document.getElementById('audio');
    audio.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    const audio = document.getElementById('audio');
    audio.pause();
  };

  const prevSong = () => {
    if (prevIndex.length === 0) {
      setSongIndex(0);
    } else {
      setSongIndex(prevIndex.pop());
    }
  };

  const shuffleNext = () => {
    const newIndex = Math.floor(Math.random() * songs.length);
    setPrevIndex([...prevIndex, songIndex]);
    setSongIndex(newIndex);
  };

  return (
    <div className="music-container">
      <div className="music-info">
        <h4 id="title">Artist Name</h4>
      </div>
      <audio src="" id="audio" onEnded={shuffleNext}></audio>
      <div className="navigation">
        <button id="prev" className="action-btn" onClick={prevSong}>
          <i className="fas fa-backward"></i>
        </button>
        <button id="play" className="action-btn action-btn-big" onClick={isPlaying ? pauseSong : playSong}>
          <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
        </button>
        <button id="next" className="action-btn" onClick={shuffleNext}>
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
