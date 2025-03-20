import React, { useEffect, useState } from "react";
import FoodCo from "./Images/Food-co.jpg";
import MamaAso from "./Images/mam-aso.jpg";
import MealTown from "./Images/meal-town.jpg";
import FastBite from "./Images/fast-bite.jpg";
import SnackBar from "./Images/Snack-Bar.jpg";
import PigHouse from "./Images/pig-house.jpg";
import DinnerDiner from "./Images/Dinner-diner.jpg";
import VeganPalace from "./Images/FoodCo.jpg";
import ColdSpot from "./Images/cold-spot.jpg";
import IcedUp from "./Images/iced-up.jpg";
import { FaNairaSign } from "react-icons/fa6";

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";

import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../utils/constants";

const allRestaurants = [
  {
    id: 1,
    Category: "Fast Food",
    name: "FoodCo",
    image: (
      <img src={FoodCo} alt="fried rice" className="rounded-t-lg w-full" />
    ),
    time: "30-35",
    Rating: 4,
    p: "p",
  },

  {
    id: 2,
    Category: "Fast Food",
    name: " ChopNow",
    image: (
      <img src={SnackBar} alt="rice & beans" className="rounded-t-lg w-full" />
    ),
    time: "10-20",
    Rating: 3,
  },
  {
    id: 3,
    Category: "Local Dishes",

    name: "Meal Town",
    image: <img src={MealTown} alt="" className="rounded-t-lg w-full" />,
    time: "10-15",
    Rating: 2.9,
    p: "p",
  },
  {
    id: 4,
    Category: "local Dishes",
    name: " Mama Aso",

    image: (
      <img src={MamaAso} alt="Amala & Ewedu" className="rounded-t-lg w-full" />
    ),
    time: "10-20",

    Rating: 5,
  },
  {
    id: 5,
    Category: "Snacks",
    name: "Snack bar",
    image: <img src={FastBite} alt="meatpie" className="rounded-t-lg w-full" />,
    time: "10-20",
    Rating: 3,
    p: "p",
  },
  {
    id: 6,
    Category: "Snack",
    name: "Snack Escape ",

    image: (
      <img src={SnackBar} alt="doughnut" className="rounded-t-lg w-full" />
    ),
    time: "45-50",
    Rating: 4.8,
  },

  {
    id: 7,
    Category: "Small Chops",

    name: "PigHouse",
    image: (
      <img src={PigHouse} alt="pork chops" className="rounded-t-lg w-full" />
    ),

    time: "30-40",
    Rating: 4.6,
    p: "p",
  },
  {
    id: 8,
    Category: "Vegetatrian",

    name: "Vegan Palace",
    image: (
      <img
        src={VeganPalace}
        alt="fruit salad"
        className="rounded-t-lg w-full"
      />
    ),
    time: "20-30",
    Rating: 3.5,
    p: "p",
  },
  {
    id: 9,
    Category: "Vegetarian",
    name: "V4V",
    image: (
      <img
        src={DinnerDiner}
        alt="Chilaquiles"
        className="rounded-t-lg w-full"
      />
    ),
    time: "10-20",
    Rating: 2,
  },

  {
    id: 10,
    Category: "Drinks",

    name: "Cold Spot",
    image: <img src={ColdSpot} alt="pepsi" className="rounded-t-lg w-full" />,
    Rating: 3.3,
    time: "10-20",
    p: "p",
  },
  {
    id: 11,
    Category: "Drinks",
    name: "Iced Bar",
    image: <img src={IcedUp} alt="yoghurt" className="rounded-t-lg w-full" />,
    time: "05-10",
    Rating: 4.7,
  },

  {
    id: 12,
    Category: "Desert",

    name: "Dinner Diner",
    image: (
      <img src={DinnerDiner} alt="Brownie" className="rounded-t-lg w-full" />
    ),
    Rating: 2,
    time: "05-10",
    p: "p",
  },
];

const foods = [
  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "Rice",
    price: 30.3,
    Category: "Local dishes",
    likes: 5.2,
  },

  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "beans",
    price: 30.3,
    Category: "Local dishes",
    likes: 3.5,
  },
  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "fufu",
    price: 30.3,
    Category: "Local dishes",
    likes: 3.8,
  },
  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "Eba",
    price: 30.3,
    Category: "Local dishes",
    likes: 3.2,
  },
  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "Spagetti",
    price: 30.3,
    Category: "Local dishes",
    likes: 3.9,
  },
  {
    image: <img src={MamaAso} alt="Brownie" className="rounded-t-lg w-full" />,
    name: "eggroll",
    price: 30.3,
    Category: "Local dishes",
    likes: 7,
  },
];
// const UniqueCategory = new Set();

function Restaurants() {
  const navigator = useNavigate();
  // const [photos, setPhotos] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = () => {
    console.log("Loading restaurants");
    axios
      .get(`${API_BASE_URL}/deluxefood/get-all-vendor`)
      .then((res) => {
        console.log("RESPONSE ====>>>>", res);
        setRestaurants(res.data.vendors);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  console.log(restaurants);

  return (
    <>
      <div className="flex flex-col">
        <ul className="flex gap-5  self-center  justify-item-center  content-center items-center mb-10">
          <button className="bg-red-300 cursor-pointer rounded-lg px-5 text-lg text-red-800 hover:bg-red-400 hover:text-white font-500">
            All
          </button>

          {allRestaurants.map((rest) =>
            rest.p ? (
              <button
                key={rest.id}
                className="bg-red-300 cursor-pointer rounded-lg px-5 text-lg text-red-800 hover:bg-red-400 hover:text-white font-500"
              >
                {rest.Category}
              </button>
            ) : (
              console.log("no")
            )
          )}
        </ul>

        <section className="flex gap-10 relative">
          {restaurants.map((rest) => (
            <div
              key={rest._id}
              onClick={() => navigator("/foodshop")}
              className=" min-w-65 rounded-lg shadow-md flex flex-col  overflow-hidden mb-10 hover:text-xl  hover:font-bold  hover:scale-x-[1.1] hover:shadow-2xl ease-in duration-[100ms] cursor-pointer"
            >
              <div className="flex h-50 ">{rest.picture}</div>
              <div className="p-4">
                <p className="text-red-500 font-bold text-lg">
                  {rest.companyName}
                </p>
                <p>{rest.preference[0]}</p>
                <div className="flex justify-between mt-2 ">
                  <p>{rest.Rating}★</p>
                  <p>{rest.time} min</p>
                </div>
                <p>{rest.address}</p>
              </div>
            </div>
          ))}
        </section>
        <h1 className=" font-bold text-xl my-13">Popular Meals</h1>
        <section className="flex gap-10 p-10 rounded-lg relative  bg-gray-100">
          {foods.map(
            (food) =>
              food.likes > 3.5 && (
                <div className=" min-w-58 rounded-lg hover:font-bold  shadow-md bg-white flex flex-col  overflow-hidden hover:text-xl   hover:min-w-63 hover:shadow-xl cursor-pointer">
                  <div className="flex h-38 ">{food.image}</div>
                  <div className="p-4">
                    <p className="text-red-500 font-bold text-lg">
                      {food.name}
                    </p>
                    <p>{food.Category}</p>
                    <div className="flex justify-between mt-2 ">
                      <p> ₦{food.price}</p>
                      <p>{food.likes}💕</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </section>
      </div>
    </>
  );
}

export default Restaurants;

// const [loading, setLoading] = useState(false);
// const [formData, setFormData] = useState({
//   username: "",
//   email: "",
//   passwords: "",
// });
// const [image, setImage] = useState;

// const fetchPhotos = () => {
//   setLoading(true);
//   axios
//     .get("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => {
//       console.log("This is the response", res);
//       setLoading(false);
//       setPhotos(res.data.splice(0, 10));
//     })
//     .catch((err) => {
//       console.log("An error occured", err);
//       setLoading(false);
//     });
// };

// useEffect(() => {
//   fetchPhotos();
// }, []);

// {loading && <h1>Loading...</h1>}
// {photos?.map((photo) => (
//   // <img src={`${photo.url}`} alt={photo.title} key={photo.id} />
//   <div>{photo.url}</div>
// ))}
