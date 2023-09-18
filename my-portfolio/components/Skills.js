

import React from 'react';
import Heading from './Heading';
function CustomHeading(props) {
    return (
      <h1 className='text-2xl text-blue-500 font-bold mt-2 mb-2'>{props.title}</h1>
    );
  }
  
  function Skills() {
    return (
      <section className='container mx-auto py-10 px-4'>
      <CustomHeading title="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>ANGULAR</p>
          <span className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</span>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>

        {/* Repite este bloque para cada habilidad */}
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>REACT</p>
          <p className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</p>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>

        {/* Repite este bloque para cada habilidad */}
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>NEXT.JS</p>
          <p className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</p>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>

        {/* Repite este bloque para cada habilidad */}
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>CSS</p>
           <p className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</p>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>

        {/* Repite este bloque para cada habilidad */}
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>TYPESCRIPT</p>
          <p className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</p>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>

        {/* Repite este bloque para cada habilidad */}
        <div className='text-center'>
          <p className='ml-2 text-blue-500 font-semibold'>TAILWIND</p>
          <p className='ml-2 text-blue-500 font-semibold'>INTERMEDIATE</p>
          <div className='relative bg-gray-300 h-[15px] mt-2'>
            <div className='bg-blue-500 absolute h-[15px] w-[50%]'></div>
          </div>
        </div>
      </div>
    </section>
  );
  
  }

export default Skills;

