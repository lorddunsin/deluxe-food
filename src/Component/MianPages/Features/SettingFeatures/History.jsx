import React, { useEffect, useState } from "react";

function History() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(stored);
  }, []);

  return (
    <div className="p-5 w-full ">
      <h2 className="text-3xl font-bold mb-6 text-red-700 text-center ">
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-red-500 font-semibold text-lg">
          You haven’t made any orders yet.
        </p>
      ) : (
        <div className="grid gap-6 grid lg:grid-cols-2">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-4 shadow-md rounded-lg border border-red-100 "
            >
              <div className="flex-col justify-between text-center items-center mb-3">
                <p className="font-semibold  text-lg truncate">
                  Order #{order.id}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(order.date).toLocaleString()}
                </p>
              </div>

              <div className="space-y-2 mb-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-red-500 font-semibold">
                      ₦{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-right font-bold text-red-600 border-t pt-2">
                Total: ₦{order.total}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default History;
