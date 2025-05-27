import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const fetchAllFoods = () => {
    axios
      .get(`${API_BASE_URL}/deluxefood/get-all-foods`)
      .then((res) => {
        setFoods(res.data.data);
      })
      .catch((err) => console.error("ERROR:", err));
  };

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
    if (urlCategory) {
      setCategory(urlCategory); // sets state so existing effect triggers
    }
  }, [urlCategory]);

  useEffect(() => {
    if (category) {
      axios
        .get(
          `${API_BASE_URL}/deluxefood/search-food-by-category?category=${category}`
        )
        .then((res) => {
          setFoods(res.data.foods);
        })
        .catch((err) => console.error("ERROR:", err));
    }
  }, [category]);

  useEffect(() => {
    fetchAllFoods(); // initial load
  }, []);

  const addToCart = (foodItem) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === foodItem._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({
        id: foodItem._id,
        name: foodItem.name,
        price: foodItem.price,
        image: foodItem.picture,
        quantity: 1,
      });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <>
      {loading ? (
        <div className="text-red-600 flex flex-col items-center justify-center">
          <MoonLoader />
          <p className="text-center">
            Loading Restaurants, if this takes more than a few seconds check
            your internet connection.
          </p>
        </div>
      ) : (
        <div
          ref={refProp}
          className="flex flex-col w-full max-w-full mx-auto px-4 md:px-10 lg:px-5 overflow-hidden"
        >
          <h1 className="font-bold text-2xl mt-10 text-center">
            Featured Restaurants
          </h1>

          <div>
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
                  className="bg-white w-[95%] hover:border-4 border-red-500 rounded-lg shadow-md cursor-pointer mx-2"
                >
                  <img
                    src={rest.picture}
                    alt={rest.companyName}
                    className="w-full h-40 rounded-t-lg object-cover"
                  />
                  <div className="p-4">
                    <p className="text-red-500 font-bold text-lg truncate">
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

          <h1 className="font-bold text-2xl mt-10 text-center">
            Popular Meals
          </h1>

          <div className="w-full mt-6">
            <ul className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setCategory(""); // Reset category
                  fetchAllFoods(); // Fetch all foods
                }}
                className="bg-red-600 cursor-pointer rounded-lg px-3  text-sm sm:text-lg text-white hover:text-red-800 hover:bg-red-300  transition"
              >
                All
              </button>
              {[
                "Fast food",
                "Snacks",
                "local dish",
                "Intercontinental dish",
                "Sea foods",
                "Drinks",
                "Vegetarian foods",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
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
              {foods.map((food) => {
                const inCart = cart.some((item) => item.id === food._id);

                return (
                  <div
                    key={food._id}
                    className="relative group bg-white rounded-lg shadow-md hover:shadow-lg w-[95%] mx-2 overflow-hidden cursor-pointer"
                  >
                    {/* Image Section with Overlay */}
                    <div className="relative h-40">
                      <img
                        src={food.picture || "/placeholder.png"}
                        alt={food.name}
                        className="w-full h-full object-cover rounded-t-lg"
                      />

                      {/* Dark overlay when card or button is hovered */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-60 hover:opacity-60 transition-opacity duration-300 rounded-t-lg z-10" />

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(food)}
                        className={`absolute top-1/2 left-1/2 flex text-sm w-[70%] justify-items-center justify-center transform -translate-x-1/2 -translate-y-1/2 font-semibold ${
                          inCart
                            ? "bg-white text-red-700  text-red-700 cursor-not-allowed"
                            : "bg-red-600 text-white hover:bg-red-700"
                        } text-sm py-2 px-4 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20`}
                      >
                        {inCart ? "Added to Cart" : "Add to Cart"}{" "}
                        <IoCartOutline className="ml-2 text-xl" />
                      </button>
                    </div>

                    {/* Food Info Section */}
                    <div className="p-4">
                      <p className="text-red-500 text-lg truncate">
                        {food.name}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {food.category?.[0] || "Uncategorized"}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        Vendor: {food.vendor?.companyName}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-lg font-semibold">
                          ₦{new Intl.NumberFormat("en-NG").format(food.price)}
                        </p>
                        <p className="text-red-500 text-sm">142💕</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

export default Restaurants;
