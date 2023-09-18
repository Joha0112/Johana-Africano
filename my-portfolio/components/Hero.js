import React from 'react'
import Typewriter from 'typewriter-effect'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home">
      <div className=' flex items-center justify-between w-full' style={{ marginTop: '100px'}}>
        <div>  
          <Image className="rounded-full shadow-2x1 justify-start" src="/programadora.jpg" alt="" width={300} height={300} style={{ marginLeft: '100%' }} />
          </div>
          <div className='w-1/2'>
          <h1 className="text-5x1 text-blue-500" style={{ fontWeight: 'bold', fontSize: '30px' }}>I'm Johana Africano</h1>
            <h4 className='text-2x1 mt-3' style={{ fontWeight: 'bold' }}>
            <Typewriter
            options={{
            strings: [
              "Frontend Developer",
              "UI/UX"
            ],
            ChangeDelay: 3,
            ChangeDeleteSpeed: 2,
            autoStart: true,
            loop: true,
          }}      
           />
            </h4>
            <p style={{textAlign:'justify', fontWeight: 'bold'}}>I'm a Front-end Web Developer specialized in creating engaging websites <br />
              and applications. With solid knowledge in HTML, Css, Sass, Javascript, React, <br />
              Angular and Next.js. I can transform your ideas into an innovative digital <br />
              experience for your business. Oriented to creativity, the user experience in <br />
               order to deliver digital products with amazing experiences. Also, with<br />
              extensive knowledge in Figma and git, to ensure better efficiency. If you <br />
              want to meet an expert in Front-end development with skills in user<br />
              interfaces and user expeerince.Contact me!<br />
            </p>
            
            <Button link="#" text="Learn More"/>
                     
          </div>
          
      </div>

    </section>

    
  )
}

export default Hero
