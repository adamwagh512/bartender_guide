import React from 'react'
import Navbar from './navbar'
import { Rock_Salt, Josefin_Slab, Biryani } from 'next/font/google';


const rock_salt = Rock_Salt({
    weight: '400',
    subsets: ['latin']
});

const josefin_slab = Josefin_Slab ({
    weight: '400',
    subsets: ['latin']
})

const biryani = Biryani ({
    weight: '200',
    subsets: ['latin']
})



const drink = () => {
  return (
    <>
    <Navbar />
    <div className='bg-[#070e26] h-screen w-full text-[#F2B950]' >
      <div className='text-6xl text-center pt-[20%] md:pt-[10%] lg:pt-[5%]'>
        <h1 className={josefin_slab.className} id='drink_name'>Drink Name</h1>
      </div>

    </div>
    </>
  )
}

export default drink