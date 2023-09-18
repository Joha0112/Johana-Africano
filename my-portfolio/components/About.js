import React from 'react';
import Heading from './Heading';
import { FiBookOpen } from 'react-icons/fi';

function CustomHeading(props) {
  return (
    <h1 className='text-2xl text-blue-500 font-bold mb-4'>{props.title}</h1>
  );
  
}

const About = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <CustomHeading title="About Me" />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
        <div>
          <img className='w-[300px]' src="programadora.jpg" alt="Programadora" />
        </div>
        <div>
           <div className='education-container' style={{ fontWeight: 'bold', fontSize: '20px' }}>
            <h1 className="text-2xl text-blue-500 mb-4 ">EDUCATION</h1>
            <div className='education-item flex items-center mb-4'>
              <FiBookOpen className='text-blue-500 text-[22px]' style={{ fontSize: '50px' }} />
              <div className='mx-4'>
                <p>Jun 2022 - Feb 2023</p>
                <h2>Desarrollo Web Full-Stack</h2>
                <p>DEV.F - PROtalento</p>
              </div>
            </div>
            <div className='education-item flex items-center mb-4'>
              <FiBookOpen className='text-blue-500 text-[22px]' style={{ fontSize: '50px' }} />
              <div className='mx-4'>
                <p>Abr 2023 - Act</p>
                <h2>Análisis Y Desarrollo De Software (ADSO)</h2>
                <p>SENA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
