import React from "react";
import Drink from "../components/drink_templete";


// displays the drink templete, populated with the results of our random drink API call.
const RandomDrink = ({results}) => {
  return (
    <>
      <Drink results={results} />
    </>
  );
};

export default RandomDrink;

// Using a server side prop will make sure that the content is loaded before the page is displayed on the user's device
export async function getServerSideProps(){
  // making a fetch request to the cocktaildb random drink generator
  const results = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
    // converting the resolution into json
    ).then((res)=> res.json());
    // returning the results as a prop
    return {
      props: {
        results
      },
    }
}