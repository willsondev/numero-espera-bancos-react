import React from 'react';

const Advertisement = () => {
  return (
    <div className="w-auto h-68 relative overflow-hidden">
      <img 
        src="/assets/imagenseguro.png" 
        alt="Publicidad" 
        className="w-full  h-full object-cover absolute inset-0 object-[center_10%]"
        // object-[center_70%] = centrado horizontal, 70% desde arriba vertical
      />
    </div>
  );
};

export default Advertisement;