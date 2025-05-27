import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TopSect from "./Features/TopSect";
import Footer from "./Features/Footer";
import { FaOpencart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import { MoonLoader } from "react-spinners";

function FoodShop() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const companyName = searchParams.get("id");

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [vendor, setVendor] = useState({});
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (companyName) {
      setLoading(true);
      axios
        .get(
          `${API_BASE_URL}/deluxefood/search-vendor-by-company-name?companyName=${companyName}`
        )
        .then((res) => {
          console.log(res.data);
          setVendor(res.data.vendor);
          setFoods(res.data.foods);
          setLoading(false);
        })
        .catch((err) => {
          console.error("An error occurred:", err);
          setLoading(false);
        });
    }
  }, [companyName]);

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

  return (
    <div className="overflow-hidden">
      <Navbar />

      <button
        onClick={() => navigate("/cart")}
        className="fixed right-4 top-[70px] bg-red-700 border-1 border-red-500 rounded-lg p-2 flex items-center gap-2 text-lg text-white z-50 shadow-md"
      >
        <FaOpencart />
        <span className="text-[11px] p-1 rounded-xl flex items-center justify-center h-5 w-5 bg-red-500">
          {cart.length}
        </span>
      </button>

      <TopSect header={vendor.companyName} subheader={vendor.preference} />

      <section className="grid mt-10 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 min-h-[73vh]">
        {loading ? (
          <div className="col-span-4 w-full flex flex-col items-center justify-center text-red-500">
            <MoonLoader />
            <p className="mt-4 text-center">Loading foods, please wait...</p>
          </div>
        ) : foods.length === 0 ? (
          <div className="col-span-4 text-red-500 font-bold text-4xl text-center">
            Sorry! No food available in this restaurant at the moment
          </div>
        ) : (
          foods.map((food) => {
            const inCart = cart.some((item) => item.id === food._id);
            return (
              <div
                key={food._id}
                className="group w-full max-w-xs rounded-lg shadow-md overflow-hidden mb-10 cursor-pointer bg-white"
              >
                <div className="relative h-40">
                  <img
                    src={food.picture || "/placeholder.png"}
                    alt={food.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 rounded-t-lg" />
                  <button
                    onClick={() => addToCart(food)}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold ${
                      inCart
                        ? "bg-white text-red-700  text-red-700 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700"
                    } text-sm py-2 px-4 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20`}
                  >
                    {inCart ? "Added to Cart" : "Add to Cart"}{" "}
                    <IoCartOutline className="ml-2 text-xl" />
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 font-bold">
                  <p className="text-red-500 truncate">{food.name}</p>
                  <p>
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(food.price)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </section>

      <Footer email={vendor.email} location={vendor.address} />
    </div>
  );
}

export default FoodShop;
