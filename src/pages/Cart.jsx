import React from "react";

function Cart({ cartItems, setCartItems }) {
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-page bg-gray-100 min-h-screen px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Shopping Cart
      </h2>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start bg-white p-3 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 flex object-contain rounded-md shadow-md border border-gray-300 mb-3"
              />
              {/* Item details and text */}
              <div className="flex flex-col flex-1 text-left space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Price: <span className="font-semibold">${item.price}</span>
                </p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              {/* Total Price */}
              <div className="text-lg font-semibold text-gray-800 mt-2">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-2 text-red-500 hover:text-red-700 transition duration-300 ease-in-out py-1 px-3 rounded-lg border border-red-500 hover:bg-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">
          Your cart is empty. Please add some items to your cart.
        </div>
      )}

      {/* Total Price Section */}
      <div className="mt-6 text-right border-t pt-6">
        <p className="text-xl font-bold text-gray-800 mb-4">
          Grand Total: <span className="text-blue-600">${totalPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;
