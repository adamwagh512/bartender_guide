import React from 'react'
import Navbar from './navbar'
import Image from 'next/image';
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



const drink = ({results}) => {
  console.log(results)
  return (
    <>
    <Navbar />
    <div className='bg-[#070e26] h-screen w-full text-[#F2B950]' >
      <div className='text-6xl text-center pt-[20%] md:pt-[10%] lg:pt-[5%]'>
        <h1 className={josefin_slab.className} id='drink_name'>{results.drinks[0].strDrink}</h1>
      </div>
      <div>
        <p>Glass type: `{results.drinks[0].strGlass}`</p>
        <p>Instructions: `{results.drinks[0].strInstructions}`</p>
      </div>

    </div>
    </>
  )
}

export default drink