import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        setError("Error fetching product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product, quantity); // Pass quantity to parent component
      navigate("/cart");
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-gray-700">
        Loading product details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-500">
        {error}
      </div>
    );
  }

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-xl rounded-lg max-w-4xl">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Product Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain rounded-md shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Price: <span className="text-green-600">${product.price}</span>
          </p>

          {/* Quantity and Add to Cart Button */}
          <div className="flex items-center mb-6">
            <label
              htmlFor="quantity"
              className="mr-3 font-medium text-gray-700"
            >
              Quantity:
            </label>

            {/* Increment and Decrement Buttons */}
            <button
              onClick={handleDecrement}
              className="px-4 py-2 bg-gray-300 rounded-l-md hover:bg-gray-400 transition duration-300"
            >
              -
            </button>

            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="border border-gray-300 p-2 w-20 text-center rounded-md"
              min="1"
            />

            <button
              onClick={handleIncrement}
              className="px-4 py-2 bg-gray-300 rounded-r-md hover:bg-gray-400 transition duration-300"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="text-xl font-semibold text-gray-800 mb-6">
            Total: <span className="text-red-600">${totalPrice}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
