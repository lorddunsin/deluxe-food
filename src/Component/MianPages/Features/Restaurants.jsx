import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../utils/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MoonLoader } from "react-spinners";

function Restaurants({ refProp }) {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/deluxefood/get-all-vendor`)
      .then((res) => {
        setRestaurants(res.data.vendors);
        setLoading(false);
      })

      .catch((err) => console.error("ERROR:", err));
  }, []);

  useEffect(() => {
    axios
      .get(
        `${API_BASE_URL}/deluxefood/get-food-by-category?category=${category}`
      )
      .then((res) => setFoods(res.data.foods))
      .catch((err) => {
        console.error("ERROR:", err);
        // setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/deluxefood/get-all-foods`)
      .then((res) => setFoods(res.data.data))
      .catch((err) => console.error("ERROR:", err));
  }, []);

  // Carousel Responsive Settings
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <>
      {loading ? (
        <div className=" text-red-600 flex-col items-center justify-items-center   justify-center ">
          <MoonLoader />{" "}
          <p className="text-center">
            {" "}
            Loading Restuarants, if this takes more than a few seconds check you
            internet connection
          </p>
        </div>
      ) : (
        <div
          ref={refProp}
          className="flex flex-col w-full max-w-full mx-auto px-50 md:px-10 lg:px-5 overflow-hidden"
        >
          
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-10 text-center">
            Featured Restaurants
          </h1>

          <div className=" items-center w-[40%] mx-auto sm:w-[50%] md:w-[70%] lg:w-[90%] xl:w-full overflow-hidden">
            {" "}
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
              className="mt-6"
            >
              {restaurants.map((rest) => (
                <div
                  key={rest._id}
                  onClick={() => navigate(`/foodshop?id=${rest.companyName}`)}
                  className="bg-white mx-auto w-[95%] hover:border-4 border-red-500 rounded-lg shadow-md b cursor-pointer mx-2"
                >
                  <img
                    src={rest.picture}
                    alt={rest.companyName}
                    className="w-full h-40  rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-red-500 font-bold text-lg truncate pr-2">
                      {rest.companyName}
                    </p>
                    <p className="flex gap-2 items-center text-gray-600">
                      {rest.preference[0]} <IoFastFoodOutline />
                    </p>
                    <p className="flex items-center gap-2 text-sm text-gray-600 mt-2 truncate">
                      <FaLocationDot />
                      {rest.address}
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Popular Meals Section */}
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mt-10 text-center">
            Popular Meals
          </h1>

          {/* Category Buttons */}

          {/* Meals Carousel */}
          <div className=" items-center w-[40%] mx-auto sm:w-[50%] md:w-[70%] lg:w-[90%] xl:w-full overflow-hidden">
            <ul className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                "All",
                "Fast food",
                "Snacks",
                "Local dish",
                "Intercontinental dish",
                "Sea foods",
                "Drinks",
                "Vegetarian foods",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item === "All" ? "" : item)}
                  className="bg-red-600 cursor-pointer rounded-lg px-3  text-sm sm:text-lg text-white hover:text-red-800 hover:bg-red-300  transition"
                >
                  {item}
                </button>
              ))}
            </ul>
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
              className="mt-8"
            >
              {foods.map((food) => (
                <div
                  key={food._id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg mx-auto w-50 hover:border cursor-pointer mx-2"
                >
                  <img
                    src={food.picture}
                    alt={food.name}
                    className="w-full h-40  rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-red-500 text-lg wrap overflow-hidden truncate pl-2">
                      {food.name}
                    </p>
                    <p className="text-gray-600">{food.Category}</p>
                    <div className="flex justify-between mt-2">
                      <p className="text-lg font-semibold">₦{food.price}</p>
                      <p className="text-red-500 text-sm">142💕</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

export default Restaurants;
