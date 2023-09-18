import React from 'react'
import Heading from './Heading'
function CustomHeading(props) {
    return (
      <h1 className='text-2xl text-blue-500 font-bold mt-2 mb-2'>{props.title}</h1>
    );
  }
  


const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
      <CustomHeading title="Contact Me" />
      <form className='flex flex-col gap-8' >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <input
         type="text" placeholder="Name" className="inputStyle outline-[#3B82F6] border rounded-[5px] px-4 py-2 w-[100%] border-gray-400" required  />
          <input type="text" placeholder="E-mail" className="inputStyle outline-[#3B82F6] border rounded-[5px] px-4 py-2 w-[100%] border-gray-400" required  />
        </div>
        <input
         type="text" placeholder="Subject" className="inputStyle outline-[#3B82F6] border rounded-[5px] px-4 py-2 w-[100%] border-gray-400" required  />
        <textarea rows="6" placeholder="Write your message" className="inputStyle outline-[#3B82F6] border rounded-[5px] px-4 py-2 w-[100%] border-gray-400" required></textarea>
         <div className="flex justify-center">
          <button type="submit" className="btn">SEND MESSAGE</button>
          <style jsx>{`
    .btn {
      background-color: rgb(59, 130, 246);
      color: #fff;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      display: inline-block;
      margin-top: 1rem;
      font-weight: 500;
      border: 1px solid #000;
      transition: background-color 200ms;
    }

    .btn:hover {
      color: #111;
    }
  `}</style>
         </div>

      </form>
        
    </section>
  )
}

export default Contact
