import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Advertisement from '../Advertisement/Advertisement';

const Sidebar = () => {
  const mainVideos = ["/assets/video1.mp4", "/assets/video2.mp4"];
  const adVideo = "/assets/video3.mp4";

  return (
    <aside className="hidden md:flex md:flex-col w-full md:w-64 lg:w-72 xl:w-80 h-full bg-gradient-to-b from-[#005BEA] to-[#00C6FB] rounded-xl p-4 gap-4 overflow-y-auto">
      {/* Contenedor principal de videos */}
      <div className="flex-1 rounded-lg overflow-hidden shadow-md">
        <VideoPlayer videos={mainVideos} className="h-full" />
      </div>
      
      {/* Espacio para anuncio */}
      <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/20">
        <h3 className="text-white font-medium mb-2 text-sm">Publicidad</h3>
        <Advertisement 
          videoSrc={adVideo} 
          className="rounded-md overflow-hidden"
        />
      </div>
    </aside>
  );
};

export default Sidebar;