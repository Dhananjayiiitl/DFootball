import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white h-7 text-1xl'>
    <div className='w-96 m-auto '>
    <ul className='flex justify-between'>
    <li className='hover:scale-110 cursor-pointer'>LiveScore</li>
    <li className='hover:scale-110 cursor-pointer'>Prediction</li>
    <li className='hover:scale-110 cursor-pointer'>League</li>
    <li className='hover:scale-110 cursor-pointer'>Tip</li>
    </ul>
    </div>
    </div>
    )
}

export default Navbar