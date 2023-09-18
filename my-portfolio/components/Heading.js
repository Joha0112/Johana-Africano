import React from 'react'

const Heading = ({ title }) => {
  return (
    <div className='text-blue-500 text-32px font-medium flex items-center gap-4 py-16'>
        {title}
        <div className='bg-blue-500 h-[2px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading