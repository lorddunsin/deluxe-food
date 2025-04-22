import React, { useState } from "react";
import emptycart from "/illustration-empty-cart.svg";
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const increment = (index) => {
    const updated = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.min(item.quantity + 1, 5) } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decrement = (index) => {
    const updated = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleConfirm = () => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      items: cartItems,
      total: totalPrice,
    };

    const previousOrders =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    const updatedOrders = [newOrder, ...previousOrders];

    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
    localStorage.removeItem("cart");
    setCartItems([]);

    alert("✅ Order placed successfully!");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <nav className="px-5 md:px-10 py-6 font-bold flex justify-between items-center text-white w-full bg-red-700">
        <h1 onClick={() => navigate("/")} className="text-xl sm:text-3xl mr-5">
          DeluxeFood
        </h1>

        <div className="inline md:flex gap-5 md:gap-20 lg:gap-60 justify-items-center justify-center items-center">
          <h1 className="flex justify-center items-center text-sm sm:text-base md:text-xl font-bold mb-5 text-center mt-4">
            Foods in Cart{" "}
            <span className="bg-red-500 py-1 flex float-right ml-3 w-9 rounded-3xl text-center items-center justify-center">
              {cartItems.length}
            </span>
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-white px-2 hover:cursor-pointer rounded-2xl p-1 text-2xl max-h-9 font-bold hover:bg-red-500"
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
      </nav>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-10">
          <img
            src={emptycart}
            alt="Empty cart"
            className="w-40 md:w-60 lg:w-80"
          />
          <p className="text-lg text-red-500 font-bold mt-4">Cart is Empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 m-5">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col relative items-center bg-red-200 shadow-md p-5 rounded-lg "
              >
                <span
                  onClick={() => removeItem(index)}
                  className="absolute top-2 right-2 hover:bg-red-500 hover:text-white p-1 text-2xl text-white bg-red-400 rounded-full cursor-pointer"
                >
                  <CiCircleRemove />
                </span>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-36 object-cover rounded-lg mb-4"
                />

                <div className="w-full text-center mb-2 flex flex-col items-center">
                  <p className="font-semibold text-base text-gray-800 truncate">
                    {item.name}
                  </p>
                  <div className="flex items-center self-center gap-2">
                    <p className="text-red-600 font-medium text-sm">
                      {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(item.price)}
                    </p>
                    <p className="text-red-600 font-medium text-sm">
                      {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(item.price * item.quantity)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="bg-red-500 px-4 py-2 flex items-center gap-3 rounded-lg text-white font-bold">
                  <CiCircleMinus
                    onClick={() => decrement(index)}
                    className="text-2xl cursor-pointer hover:bg-red-700 rounded-full"
                  />
                  {item.quantity}
                  <CiCirclePlus
                    onClick={() => increment(index)}
                    className="text-2xl cursor-pointer hover:bg-red-700 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <section className="bg-red-100 p-5 rounded-lg h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p>Food Items:</p>
              <p className="font-bold">{cartItems.length}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Total Quantity:</p>
              <p className="font-bold">{totalItems}</p>
            </div>
            <div className="flex justify-between font-bold text-lg text-red-600">
              <p>Order Total:</p>
              <p>
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(totalPrice)}
              </p>
            </div>
            <button
              onClick={handleConfirm}
              className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-semibold"
            >
              Confirm Order
            </button>
            <p
              onClick={() => navigate("/setting/history")}
              className="underline text-red-500 text-center mt-4 cursor-pointer"
            >
              View Order History
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default Cart;
