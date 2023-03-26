import React from 'react'
import Image from 'next/image'
import hero from '../../public/Images/hero.jpg'
import Navbar from './navbar'


const mainpage = () => {
  return (
    <>
    <Navbar />
    <div className='w-full h-screen bg-[#070e26] text-[#F2B950]'>
        <Image
        className='w-screen h-[60%]'
        src={hero}
        >
   
        </Image>
        <div className='flex h-[40%]'>
            <div className='text-center w-[100%] bg-[#070e26] h-max'>
                <h1 className='text-xl pt-[30px]'>Welcome to the Home Bartender's Guide</h1>
                <p className='pt-[30px] px-[30px]'>Introducing "The Home Bartender's Guide," the ultimate app for cocktail enthusiasts and aspiring mixologists alike. With a database of 635 drinks, this app provides users with an extensive selection of cocktail recipes to choose from. Whether you're looking for a classic cocktail or a modern twist, "The Home Bartender's Guide" has got you covered. The app's user-friendly interface allows you to search for cocktails by name, ingredient, or non-alcoholic options, making it easy to find the perfect drink for any occasion. And if you're feeling adventurous, simply hit the "random" button and let the app surprise you with a new and exciting recipe. With "The Home Bartender's Guide," you'll be able to impress your guests and master the art of mixology from the comfort of your own home.</p>
            </div>
            <div className='bg-[#A67153] hidden lg:block w-[30%]'>
                dfadsf
            </div>
        </div>
    </div>
    </>
  )
}

export default mainpage