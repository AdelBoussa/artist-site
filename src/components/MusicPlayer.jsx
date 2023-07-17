import React, { useEffect, useState } from 'react';
import '../styles/MusicPlayer.css';
const MusicPlayer = () => {
  const songs = ['fsnd1'];
  const [songIndex, setSongIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(`../assets/sounds/${songs[songIndex]}.wav`));

  useEffect(() => {
    loadSong(songs[songIndex]);
  }, [songIndex]);

  const loadSong = (song) => {
    audio.src = `../assets/sounds/${song}.wav`;
    const fileName = song.split('/').pop().split('.').slice(0, -1).join('.');
    document.getElementById('title').innerText = fileName;
    };

  const playSong = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
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

  const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  };

  const setProgress = (e) => {
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  };

  function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

  return (
    <div className="music-container">
      <div className="music-info">
        <h4 id="title">Artist Name</h4>
        <div className="progress-container" onClick={setProgress}>
          <div className="progress"></div>
        </div>
      </div>
      <audio src={audio.src} id="audio" onTimeUpdate={updateProgress} onEnded={shuffleNext}></audio>
      
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
