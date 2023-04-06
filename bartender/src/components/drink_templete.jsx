import React from "react";
import Navbar from "./navbar";
//Importing the fonts from google fonts
import { Josefin_Slab, Rock_Salt } from "next/font/google";

//  -------------------------------------------------------------------------------------------------------------
// Declaring functions so we can use the fonts
const josefin_slab = Josefin_Slab({
  weight: "400",
  subsets: ["latin"],
});

const rock_salt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

//  -------------------------------------------------------------------------------------------------------------
const drink = ({ results }) => {
  // This code will take in the instructions string, split it at the periods, and place each section into an array called instructions_array
  var instructions_array = results.drinks[0].strInstructions.split(".");
  // A mapping function that will create a new list item for every item in the instructions_array. I am slicing off the last entry because it would always be an empty string due to the way I split the information.
  const instructions = instructions_array.slice(0, -1).map((step) => <li>{step}</li>);


  //  -------------------------------------------------------------------------------------------------------------
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
//  -------------------------------------------------------------------------------------------------------------
  const pictures =[]
  for (let i=1; i <=15; i++) {
    const ingredientName = `strIngredient${i}`;
    const ingredientValue = results.drinks[0][ingredientName];
    const pictureLink = `https://www.thecocktaildb.com/images/ingredients/${ingredientValue}-Medium.png`
    const fixedLink = pictureLink.replace(' ', '%20')
    if (ingredientValue) {
      pictures.push(fixedLink)
    }
  }
  // console.log(pictures)


//  -------------------------------------------------------------------------------------------------------------
  // The following code controls the measurements list. It follows the same format as the ingredients list directly above it, please see those comments for clarification on what is happening here.
  const measurements = [];
  for (let i = 0; i <= 15; i++) {
    const measurementName = `strMeasure${i}`;
    const measurementValue = results.drinks[0][measurementName];
    if (measurementValue) {
      measurements.push(measurementValue);
    }
  }
//  -------------------------------------------------------------------------------------------------------------
  // we want to combine all of these arrays into an object that we can use to build cards for our ingredients. The code below will help with that.
  //Using the reduce method to iterate over the ingredients array and build an object by adding a new key-value pair for each element in the measurements array
  //The callback function takes two arguements, the accumulator 'acc' (which is initialized as an empty object), and current element 'curr' (which is the current element from the measurements array ))
  const ingObj = ingredients.reduce((acc, curr, index) => {
    acc[curr] = {
      measurement: measurements[index],
      picture: pictures[index]
    };
    return acc;
  }, {});

  console.log(ingObj);


  //  -------------------------------------------------------------------------------------------------------------

  // Here we are going to map our new object to create divs that I can display on my page

  const divs = Object.keys(ingObj).map((ingredient) => {
    const { measurement, picture } = ingObj[ingredient];
    return (
      <div className="" key={ingredient}>
        <img src={picture} alt={ingredient} />
        <span>{measurement} {ingredient}</span>
      </div>
    );
  });
//  -------------------------------------------------------------------------------------------------------------

const strVideo = results.drinks[0].strVideo
console.log(strVideo)

// --------------------------------------------------------------------------------------------------------------
  // This section of the code will effect what is actually rendered to the page.
  return (
    <>
      <Navbar />
      <div className={josefin_slab.className}>
        <div className="bg-[#070e26] h-screen">
        <div className="bg-[#070e26] w-full text-[#F2B950] pt-[20%] md:pt-[12%] lg:pt-[8%] xl:pt-[5%]">
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

              {strVideo === null ? null : <a href={strVideo} target='_blank'><button className="bg-[#A67153] rounded-2xl text-3xl ml-[5%] w-[88%] py-2 text-white mt-5 justify-center ">
                View Youtube Video
              </button> </a>}
              </div>
            </div>
            <div className="pt-5 flex-wrap break-all overflow-hidden">
              <p className='text-2xl'>Glass type: `{results.drinks[0].strGlass}`</p>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            <p className='text-4xl'> Ingredients:</p>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            {/* populating our ingredients */}
            <div className="columns-2 lg:columns-3 text-center overflow-hidden">{divs}</div>
            {/* Next div used for spacing so it is properly responsive */}
            <div className="w-[100] pt-5"></div>
            {/* our instructions section */}
            <p className='text-4xl'>Instructions:</p>
            {/* populating with our instructions array */}
            <ul className='list-disc text-2xl' id='instructions_list'>{instructions}</ul>
            

            </div> 
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default drink;

