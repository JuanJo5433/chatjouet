import React from 'react';
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <div className="flex items-center justify-center">
      <img src={logo} className="h-14 w-14 mr-2 object-contain" alt="Logo" />
      <span className="text-lg font-bold">CHAT JOUET</span>
      </div>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="producto" smooth={true} duration={500} className=" cursor-pointer text-sm font-medium hover:underline underline-offset-4">
          Producto
        </Link>
        <Link to="caracteristicas" smooth={true} duration={500} className=" cursor-pointer text-sm font-medium hover:underline underline-offset-4">
          Características
        </Link>
        <Link to="testimonios" smooth={true} duration={500} className=" cursor-pointer text-sm font-medium hover:underline underline-offset-4">
          Testimonios
        </Link>
        <Link to="sobre-nosotros" smooth={true} duration={500} className=" cursor-pointer text-sm font-medium hover:underline underline-offset-4">
          Sobre Nosotros
        </Link>
      
  
      </nav>
    </header>
  );
}

export default Header;
