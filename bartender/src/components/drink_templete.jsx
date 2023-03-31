import React, {useEffect, useRef, ReactDOM} from 'react'
import Navbar from './navbar'
import Image from 'next/image';
import { Josefin_Slab } from 'next/font/google';


const josefin_slab = Josefin_Slab ({
    weight: '400',
    subsets: ['latin']
})




const drink = ({results}) => {


  // This code will take in the instructions string, split it at the periods, and place each section into an array called instructions_array
  var instructions_array = (results.drinks[0].strInstructions).split('.')
  console.log(instructions_array)
  // A mapping function that will create a new list item for every item in the instructions_array
  const instructions =instructions_array.map((step) =>
    <li>{step}</li>
  )

  // This code controlls the ingredients list
  //Settin an empty array to hold ingredients
  const ingredients = [];
  // Loop through the strIngredient properties and add the values to the ingredients array. I am using 15 as the ceiling because that is the max number of ingredients on the api
  for (let i = 1; i <= 15; i++) {
    // sets value of ingredientName to strIngredient[i] (whichever iteration we are on)
    const ingredientName = `strIngredient${i}`;
    const ingredientValue = results.drinks[0][ingredientName];
    // if ingredientValue is not null, push it to the ingredients array 
    if (ingredientValue) {
      ingredients.push(ingredientValue);
    }
  }
  // Console logs for debugging purposes. 

  console.log(ingredients);
  console.log(ingredients.length)




  return (
    <>
    <Navbar />
    <div className={josefin_slab.className}>
      <div className='bg-[#070e26] h-screen w-full text-[#F2B950]'>
        <div className='text-6xl text-center pt-[20%] md:pt-[10%] lg:pt-[5%]'>
          <h1>{results.drinks[0].strDrink}</h1>
        </div>
        <div>
          <p className='text-2xl'>Glass type: `{results.drinks[0].strGlass}`</p>
          <p className='text-2xl'>Instructions:</p>
          {/* an unordered list populated with instructions */}
          <ul className='list-disc' id='instructions_list'>{instructions}</ul>
        </div>

      </div>
    </div>
    </>
  )
}

export default drink