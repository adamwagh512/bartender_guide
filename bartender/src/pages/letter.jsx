import React from 'react'
import { useState } from "react";
import Navbar from '../components/navbar';
import axios from 'axios';


// an array that contains all letters
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];


const letterObjects = alphabet.map(letter => {
    return {
      letter: letter,
    };
  });
//   Console log for debugging purposes
//   console.log(letterObjects);


// ========================================================================================================================================
// component that displays the list of letters
function AlphabetList(props) {
    // Destructure the letterObjects prop
    const { letterObjects } = props;
  
    // Define a state variable to track the selected letter
    const [selectedLetter, setSelectedLetter] = useState("");

      // Define a state variable to hold the list of drinks
    const [drinks, setDrinks] = useState([]);
  
    // Event handler function that updates the selected letter when a link is clicked
    const handleLetterClick = async (letter) => {
        setSelectedLetter(letter);
    
        // Make an API call to retrieve drinks starting with the selected letter
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        console.log(response.data.drinks); // Log the drinks array to the console
    
        // Update the state with the retrieved drinks
        setDrinks(response.data.drinks);
      };

  
    return (
        <div className='text-center text-xl'>
      {/* Map over the letterObjects array */}
      {letterObjects.map((letterObj, index) => (
        <a
          key={index}
          href='#'
          onClick={() => handleLetterClick(letterObj.letter)}
          // Set the font weight to bold if the selected letter matches the current letter
          style={{
            fontWeight: selectedLetter === letterObj.letter ? 'bold' : 'normal'
          }}
        >
          {/* Render the letter */}
          {letterObj.letter}

          {/* Add a space after each letter, except the last one */}
          {index !== letterObjects.length - 1 && ' | '}
        </a>
      ))}

      {/* Render the list of drinks */}
      {drinks.length > 0 && (
        <div>
          <h2>Drinks starting with {selectedLetter}</h2>
          <ul className='columns-1 md:columns-2 lg:columns-3'>
            {drinks.map((drink, index) => (
              <li key={index}>
                {/* Render the drink name and thumbnail */}
                <div className='border flex-column text-center justify-center overflow-hidden'>
                  <img className=' h-[60%] w-auto' src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <p className='100w'></p>
                  <p className='text-3xl'>{drink.strDrink}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const Letter = () => {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const getDrinks = async (url) => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDrinks(data.drinks);
      setLoading(false);
    };
  
    return (
      <div className="w-full h-fit bg-[#070e26] text-[#F2B950]">
        <Navbar />
        <div className="pt-[20%] md:pt-[10%] lg:pt-[7%]">
          <AlphabetList letterObjects={alphabet.map((letter) => ({ letter }))} />
          {drinks.length > 0 && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {drinks.reduce((rows, drink, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(drink);
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-3 gap-4">
                  {row.map((drink, colIndex) => (
                    <div key={colIndex}>
                      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                      <div>{drink.strDrink}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    );
  };
  
  export default Letter;

