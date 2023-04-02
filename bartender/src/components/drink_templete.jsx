import React, { useEffect, useRef, ReactDOM } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { Josefin_Slab, Rock_Salt } from "next/font/google";

const josefin_slab = Josefin_Slab({
  weight: "400",
  subsets: ["latin"],
});

const rock_salt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});


const drink = ({ results }) => {
  // This code will take in the instructions string, split it at the periods, and place each section into an array called instructions_array
  var instructions_array = results.drinks[0].strInstructions.split(".");
  console.log(instructions_array);
  // A mapping function that will create a new list item for every item in the instructions_array. I am slicing off the last entry because it would always be an empty string due to the way I split the information.
  const instructions = instructions_array.slice(0, -1).map((step) => <li>{step}</li>);
  console.log(instructions)

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
  console.log(ingredients.length);

  // The following code controls the measurements list. It follows the same format as the ingredients list directly above it, please see those comments for clarification on what is happening here.
  const measurements = [];
  for (let i = 0; i <= 15; i++) {
    const measurementName = `strMeasure${i}`;
    const measurementValue = results.drinks[0][measurementName];
    if (measurementValue) {
      measurements.push(measurementValue);
    }
  }
  console.log(measurements);

  // we want to combine all of these arrays into an object that we can use to build cards for our ingredients. The code below will help with that.
  //Using the reduce method to iterate over the ingredients array and build an object by adding a new key-value pair for each element in the measurements array
  //The callback function takes two arguements, the accumulator 'acc' (which is initialized as an empty object), and current element 'curr' (which is the current element from the measurements array ))
  const ingObj = ingredients.reduce((acc, curr, index) => {
    // Inside the callback function, we add a new property to the acc object using the current element from the keys array as the key and the corresponding measurements from the values array as the value. We do this by accessing the value in the values array using the current index index, which is passed as the third argument to the callback function.
    acc[curr] = measurements[index];
    //returns the updated acc object from the callback function
    return acc;
  }, {});

  console.log(ingObj);

  // Here we are going to map our new object to create divs that I can display on my page

  const divs = Object.keys(ingObj).map((ingredient) => {
    const measurement = ingObj[ingredient];
    return (
      <div key={ingredient}>
        {measurement} {ingredient}
      </div>
    );
  });

  // This section of the code will effect what is actually rendered to the page.
  return (
    <>
      <Navbar />
      <div className={josefin_slab.className}>
        <div className="bg-[#070e26] sm:h-fit lg:h-screen w-full text-[#F2B950] pt-[20%] md:pt-[12%] lg:pt-[8%] xl:pt-[5%]">
          <h1 className="text-center text-6xl ">
            {results.drinks[0].strDrink}
          </h1>
          <div className="flex justify-left flex-col md:flex-row">
            <div className="align left-0">
              <img
                className="h-[60vh] rounded-xl px-[5%]"
                src={results.drinks[0].strDrinkThumb}
              ></img>
              <div className={rock_salt.className}>
              <button className="bg-[#A67153] rounded-2xl text-3xl ml-[5%] w-[88%] py-2 text-white mt-5 justify-center ">
                Add to Favorites
              </button>

              <button className="bg-[#A67153] rounded-2xl text-3xl ml-[5%] w-[88%] py-2 text-white mt-5 justify-center ">
                View Youtube Video
              </button>
              </div>
            </div>
            <div className="pt-5 flex-wrap">
              <p className='text-2xl'>Glass type: `{results.drinks[0].strGlass}`</p>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            <p className='text-2xl'> Ingredients:</p>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            {/* populating our ingredients */}
            <div>{divs}</div>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            {/* our instructions section */}
            <p className='text-2xl'>Instructions:</p>
            {/* populating with our instructions array */}
            <ul className='list-disc' id='instructions_list'>{instructions}</ul>

            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default drink;

//  <div></div>
{
  /* <div className='text-6xl text-center pt-[20%] md:pt-[10%] lg:pt-[5%]'>
{/* This code renders the drink name to the page */
}
{
  /* <h1>{results.drinks[0].strDrink}</h1>
</div>
<img className='h-[60vh]' src={results.drinks[0].strDrinkThumb}></img>
<div> */
}
{
  /* This code renders the glass type information to the page */
}
{
  /* <p className='text-2xl'>Glass type: `{results.drinks[0].strGlass}`</p>
<p className='text-2xl'>Instructions:</p>
an unordered list populated with instructions function above */
}
{
  /* <ul className='list-disc' id='instructions_list'>{instructions}</ul> */
}
// </div>
// <p className='text-2xl'> Ingredients:</p>
// <div>
// {divs}
// </div> */}
