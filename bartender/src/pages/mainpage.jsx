import React from "react";
import Image from "next/image";
import hero from "../../public/Images/hero.jpg";
import Navbar from "../components/navbar";
import { Rock_Salt, Josefin_Slab, Biryani } from "next/font/google";

const rock_salt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const josefin_slab = Josefin_Slab({
  weight: "400",
  subsets: ["latin"],
});

const biryani = Biryani({
  weight: "200",
  subsets: ["latin"],
});

const mainpage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-[#070e26] text-[#F2B950]">
        <Image className="w-screen sm:h-[50%] md:h-[60%]" src={hero}></Image>
        <div className="flex h-[40%]">
          <div className="text-center w-[100%] bg-[#070e26] h-max">
            <div className="pt-6 text-5xl">
              <h1 className={josefin_slab.className}>
                Welcome to the Home Bartender's Guide
              </h1>
            </div>
            <div className="pt-4 px-6 tracking-widest text-xl">
              <p className={biryani.className}>
                Introducing "The Home Bartender's Guide," the ultimate app for
                cocktail enthusiasts and aspiring mixologists alike. With a
                database of 635 drinks, this app provides users with an
                extensive selection of cocktail recipes to choose from. Whether
                you're looking for a classic cocktail or a modern twist, "The
                Home Bartender's Guide" has got you covered. The app's
                user-friendly interface allows you to search for cocktails by
                name, ingredient, or non-alcoholic options, making it easy to
                find the perfect drink for any occasion. And if you're feeling
                adventurous, simply hit the "random" button and let the app
                surprise you with a new and exciting recipe. With "The Home
                Bartender's Guide," you'll be able to impress your guests and
                master the art of mixology from the comfort of your own home.
              </p>
            </div>
          </div>
          <div className="bg-[#A67153] hidden lg:block w-[30%]">
            <div className="text-black text-center pt-5 text-xl">
              <a href="">
                <p className={rock_salt.className}>Search by Spirit</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="">
                <p className={rock_salt.className}>Search by Glassware</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="">
                <p className={rock_salt.className}>Search by Category</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="/letter">
                <p className={rock_salt.className}>Search by First Letter</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="/RandomDrink">
                <p className={rock_salt.className}>Random Drink</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="">
                <p className={rock_salt.className}>Non-Alcoholic</p>
              </a>
            </div>

            <div className="text-black text-center pt-5 text-xl">
              <a href="">
                <p className={rock_salt.className}>Favorites</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mainpage;
