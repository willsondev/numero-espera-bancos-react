// src/components/Header.js
import React from 'react';
import { ContainerTextFlip } from "./ui/container-text-flip";

const Header = () => {
  return (
    <header className="  text-white ">
      <div className="flex flex-col items-center justify-center">
        <ContainerTextFlip
           words={["Sistema de Gestión de turnos","Seguro", "Instantáneo", "Optimizado", "a tu servicio"]}
            className="text-xl font-semibold text-yellow-300"
          />
        
      </div>
    </header>
  );
};

export default Header;