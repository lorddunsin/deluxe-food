import { API_BASE_URL } from "./../../utils/constants";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import { FaOpencart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResult = () => {
  const navigate = useNavigate();
  const query = useQuery().get("query")?.toLowerCase().trim() || "";
  const [allFoods, setAllFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    setLoading(true);
    setError("");

    axios
      .get(`${API_BASE_URL}/deluxefood/get-all-foods`)
      .then((res) => {
        setAllFoods(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setError("Failed to fetch food data.");
        setLoading(false);
      });
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

  // Split query into words for flexible matching
  const searchWords = query.split(" ").filter(Boolean);

  const filteredFoods = allFoods.filter((food) => {
    const name = food.name.toLowerCase();
    const category = food.category?.join(" ").toLowerCase() || "";
    const vendor = food.vendor?.companyName?.toLowerCase() || "";
    const price = food.price?.toString();

    return searchWords.some(
      (word) =>
        name.includes(word) ||
        category.includes(word) ||
        vendor.includes(word) ||
        price.includes(word)
    );
  });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate("/cart")}
        className="fixed right-4 top-[70px] bg-red-700 border-1 border-red-500 rounded-lg p-2 flex items-center gap-2 text-lg text-white z-50 shadow-md"
      >
        <FaOpencart />
        <span className="text-[11px] p-1 rounded-xl flex items-center justify-center h-5 w-5 bg-red-500">
          {cart.length}
        </span>
      </button>
      <h2 className="text-2xl font-bold text-gray-800 mb-10">
        Search Results for: <span className="text-red-600">{query}</span>
      </h2>

      {loading && (
        <div className="flex justify-center">
          <MoonLoader />
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <CategoryComp foods={filteredFoods} addToCart={addToCart} cart={cart} />
      )}
    </div>
  );
};

const CategoryComp = ({ foods, addToCart, cart }) => {
  if (foods.length === 0) {
    return <p className="text-gray-500 text-center">No results found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {foods.map((food) => {
        const inCart = cart.some((item) => item.id === food._id);

        return (
          <div
            key={food._id}
            className="group w-full max-w-xs rounded-lg shadow-md overflow-hidden bg-white cursor-pointer"
          >
            {/* Image with hover effect */}
            <div className="relative h-44">
              <img
                src={food.picture || "/placeholder.png"}
                alt={food.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-t-lg" />

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

            {/* Food details */}
            <div className="p-4 flex justify-between items-center p-3 font-bol">
              <h3 className="text-lg font-bold text-red-600 truncate">
                {food.name}
              </h3>
              <p className="text-base font-semibold text-gray-800">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(food.price)}
              </p>
            </div>
            <p className="text-sm text-gray-500 truncate">
              Vendor: {food.vendor?.companyName}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
