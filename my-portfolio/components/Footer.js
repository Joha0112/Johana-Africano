import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-blue-100 p-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex gap-4 items-center">
          <p className="text-24px text-blue-500 font-bold text-xl">Redes Sociales</p>
          <a href="https://www.linkedin.com/in/johanaafricano/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" style={{ fontWeight: 'bold', fontSize: '24px' }}><FaLinkedin /></a>
          <a href="https://github.com/Joha0112" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500" style={{ fontWeight: 'bold', fontSize: '24px' }}><FaGithub /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer;


