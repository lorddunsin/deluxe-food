// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import TopSect from "./Features/TopSect";
// import Footer from "./Features/Footer";
// import { FaOpencart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";
// import { API_BASE_URL } from "../../utils/constants";
// import { MoonLoader } from "react-spinners";

// function FoodShop() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const companyName = searchParams.get("id");

//   const [foods, setFoods] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [vendor, setVendor] = useState({});
//   const [cart, setCart] = useState(() => {
//     // Load cart from localStorage on initial render
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const fetchRestaurantMeals = () => {
//     setLoading(true);
//     axios
//       .get(
//         `${API_BASE_URL}/deluxefood/get-vendor-by-name?companyName=${companyName}`
//       )
//       .then((res) => {
//         setVendor(res.data.vendor);
//         setFoods(res.data.foods);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("An error occurred:", err);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchRestaurantMeals();
//   }, []);

//   const addToCart = (foodItem) => {
//     const updatedCart = [...cart];
//     const existingItem = updatedCart.find(
//       (item) => item.name === foodItem.name
//     );

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       updatedCart.push({ ...foodItem, quantity: 1 });
//     }

//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   return (
//     <div className="overflow-hidden">
//       <Navbar />

//       {/* Go to Cart Button */}
//       <button
//         onClick={() => navigate("/cart")}
//         className="fixed right-4 top-[70px] bg-red-700 rounded-lg p-2 flex items-center gap-2 text-lg text-white z-50 shadow-md"
//       >
//         <FaOpencart />
//         <span className="text-sm">{cart.length}</span>
//       </button>

//       {/* Top Section */}
//       <TopSect header={vendor.companyName} subheader={vendor.preference} />

//       {/* Foods Grid */}
//       <section className="grid mt-10 items-center grid-cols-4 gap-5 px-6 min-h-[73vh]">
//         {loading && (
//           <div className="col-span-4 w-full flex flex-col items-center justify-center text-red-500">
//             <MoonLoader />
//             <p className="mt-4 text-center">
//               Loading foods, this will only take a few seconds...
//             </p>
//           </div>
//         )}

//         {!loading && foods.length === 0 ? (
//           <div className="col-span-4 text-red-500 font-bold text-4xl text-center">
//             Sorry! No food available in this restaurant at the moment
//           </div>
//         ) : (
//           foods.map((food) => (
//             <div
//               key={food.name}
//               className="group w-full max-w-xs rounded-lg shadow-md overflow-hidden mb-10 cursor-pointer bg-white"
//             >
//               <div className="relative h-40">
//                 {/* Image */}
//                 <img
//                   src={food.picture}
//                   alt={food.name}
//                   className="w-full h-full object-cover rounded-t-lg"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10 rounded-t-lg" />

//                 {/* Button */}
//                 <button
//                   onClick={() => addToCart(food)}
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
//                 >
//                   Add to Cart <IoCartOutline className="ml-2 text-xl" />
//                 </button>
//               </div>

//               {/* Name and Price */}
//               <div className="flex justify-between items-center p-3 font-bold">
//                 <p className="text-red-500 truncate">{food.name}</p>
//                 <p>₦{food.price}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </section>

//       {/* Footer */}
//       <Footer email={vendor.email} location={vendor.address} />
//     </div>
//   );
// }

// export default FoodShop;

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

  const fetchRestaurantMeals = () => {
    setLoading(true);
    axios
      .get(
        `${API_BASE_URL}/deluxefood/get-vendor-by-name?companyName=${companyName}`
      )
      .then((res) => {
        setVendor(res.data.vendor);
        setFoods(res.data.foods);
        setLoading(false);
      })
      .catch((err) => {
        console.error("An error occurred:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (companyName) fetchRestaurantMeals();
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
        className="fixed right-4 top-[70px] bg-red-700 rounded-lg p-2 flex items-center gap-2 text-lg text-white z-50 shadow-md"
      >
        <FaOpencart />
        <span className="text-sm">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </button>

      <TopSect header={vendor.companyName} subheader={vendor.preference} />

      <section className="grid mt-10 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 min-h-[73vh]">
        {loading ? (
          <div className="col-span-4 w-full flex flex-col items-center justify-center text-red-500">
            <MoonLoader />
            <p className="mt-4 text-center">
              Loading foods, this will only take a few seconds...
            </p>
          </div>
        ) : foods.length === 0 ? (
          <div className="col-span-4 text-red-500 font-bold text-4xl text-center">
            Sorry! No food available in this restaurant at the moment
          </div>
        ) : (
          foods.map((food) => (
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
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 rounded-lg flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                >
                  Add to Cart <IoCartOutline className="ml-2 text-xl" />
                </button>
              </div>
              <div className="flex justify-between items-center p-3 font-bold">
                <p className="text-red-500 truncate">{food.name}</p>
                <p>
                  {" "}
                  {new Intl.NumberFormat("en-NG", {
                    style: "currency",
                    currency: "NGN",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(food.price)}
                </p>
              </div>
            </div>
          ))
        )}
      </section>

      <Footer email={vendor.email} location={vendor.address} />
    </div>
  );
}

export default FoodShop;
