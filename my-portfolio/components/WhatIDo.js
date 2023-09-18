import Heading from './Heading';
import { RiLightbulbFlashLine } from "react-icons/ri";

// Desactiva temporariamente las reglas de ESLint para este componente
/* eslint-disable */

function CustomHeading(props) {
  return (
    <h1 className='text-2xl text-blue-500 font-bold mb-4'>{props.title}</h1>
  );
}
    
const WhatIDo = () => {
      return (
        <section className='container mx-auto py-10 px-4'>
          <CustomHeading title="What I Do" />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black-500'>
              <RiLightbulbFlashLine className='text-blue-500 text-[28px]' />
              <h2 className='font-semibold text-blue-500 text-center text-[20px]'>Creative Designs</h2>
              <h3 className='font-semibold text-blue-500 text-center text-[16px]'>Funny English</h3>
              <p className='font-bold text-justify'>It is an exciting and effective mobile application designed to facilitate the learning of the English language in an interactive and accessible way. With an intuitive interface and a wide range of educational resources, Funny English becomes your ideal learning companion to incorporate English into your daily routine.</p>
              <div className="grid grid-cols-2 gap-2">
              <a href='#' className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out text-center'>
              FIGMA
              </a>

            <a href='#' className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center'>
            WHIMSICAL
            </a>
            </div>
            <div className="flex justify-center">
            <a href='#' className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out text-center'>
             OPTIMAL WORKSHOP
            </a>
            </div>
               <a href='https://www.behance.net/johanaafricano' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out text-center'>
                Click here to view the project
               </a>
               </div>
    
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black-500'>
              <RiLightbulbFlashLine className='text-blue-500 text-[28px]' />
              <h2 className='font-semibold text-blue-500 text-center text-[20px]'>Creative Designs</h2>
              <h3 className='font-semibold text-blue-500 text-center text-[16px]'>Airline</h3>
              <p className='font-bold text-justify'>This layout project for an airline's landing page combines attractive design and functionality, providing users with an informative and user-friendly platform to explore travel options. With a focus on the user experience, this homepage adds a modern and appealing touch.</p>
              <div className="grid grid-cols-2 gap-2">
              <a href='#' className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out text-center'>
              HTML
          </a>
          <a href='#' className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center'>
           ANGULAR
            </a>
            <a href='#' className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out text-center'>
            SCSS
            </a>
             <a href='#' className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300 ease-in-out text-center'>
             TYPESCRIPT
             </a>
             </div>
              <a href='https://aerolinea-ten.vercel.app/' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out text-center'>
              Click here to view the project
              </a>
            </div>
    
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-blue-100 text-black-500'>
              <RiLightbulbFlashLine className='text-blue-500 text-[28px]' />
              <h2 className='font-semibold text-blue-500 text-center text-[20px]'>Creative Designs</h2>
              <h3 className='font-semibold text-blue-500 text-center text-[16px]'>ATM</h3>
              <p className='font-bold text-justify'>Interactive website that simulates the operation of a virtual ATM. This application allows users to check their account balances, make cash withdrawals, and deposit funds into their fictitious account. The ATM simulator is an interactive experience.</p>
              <div className="grid grid-cols-3 gap-2">
              <a href='#' className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out text-center'>
              HTML
             </a>
            <a href='#' className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300 ease-in-out text-center'>
             CSS
            </a>
            <a href='#' className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out text-center'>
            Javascript
            </a>
            </div>
  
              <a href='https://joha0112.github.io/Cajero-Automatico/' className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out text-center'>
              Click here to view the project
              </a>
            </div>
          </div>
        </section>
      );
    }
    
    // Vuelve a activar las reglas de ESLint al final del componente
/* eslint-enable */
     
export default WhatIDo;

