import React, {useEffect} from "react";
import Drink from "../components/drink_templete";

const drink = () => {
//   function fetchcall(){
//     fetch('www.thecocktaildb.com/api/json/v1/1/random.php')
//     .then(function (response) {
//       console.log(response)
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })
// }

useEffect (() => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  },[])

// fetchcall()

  return (
    <>
      <Drink />
    </>
  );
};

export default drink;
