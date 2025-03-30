import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Error al reproducir:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      controls
      onEnded={handleVideoEnd}
      className="w-full max-w-[550px]"
      key={currentVideoIndex}
    >
      <source src={videos[currentVideoIndex]} type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
  );
};

export default VideoPlayer;