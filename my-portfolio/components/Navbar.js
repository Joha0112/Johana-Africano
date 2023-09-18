import Link from 'next/link'
import React from 'react'

import {HiDownload} from 'react-icons/hi'
import {FiMenu} from 'react-icons/fi'



const Navbar = () => {
  return (
    <div className='bg-blue-100 fixed top-0 w-[100%] z-10'>
    <div className='container mx-auto flex justify-between items-center py-4 px-4'> 
    <div className='text-24px text-blue-500'style={{ fontWeight: 'bold', fontSize: '20px' }}>Johana Africano</div>

    <div className='hidden md:flex gap-6'>

    
    <a className='hover:text-blue-500' style={{ fontWeight: 'bold', fontSize: '20px' }}>Home</a>
    <a className='hover:text-blue-500' style={{ fontWeight: 'bold', fontSize: '20px' }}>About</a>
    <a className='hover:text-blue-500 ' style={{ fontWeight: 'bold', fontSize: '20px' }}>Portfolio</a>
    <a className='hover:text-blue-500' style={{ fontWeight: 'bold', fontSize: '20px' }}>Blog</a>
    <a className='hover:text-blue-500' style={{ fontWeight: 'bold', fontSize: '20px' }}>Contact</a>
    </div>
       
   <a href="https://docs.google.com/document/d/1f_Q8_oDn2Fq2y3SuCCvLcqj5_q1n6IuW92gs-kYhIlk/edit" target="_blank" rel="noopener noreferrer" className='hidden md:flex border border-blue-500 px-4 py-1 text-blue-500 rounded-5px items-center gap-2 
   hover:bg-blur-500 hover:text-white transition duration-200' style={{fontWeight:'bold'}}>
    Download Cv
   <HiDownload /> 
    </a>
    <div className='md:hidden text-24px'>
    <FiMenu />
    </div>
    </div>
    </div>
  )
}

export default Navbar