import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import Link
import axios from "axios";

function Product() {
  const { category } = useParams(); // Get category from URL params
  const [allProducts, setAllProducts] = useState([]); // All products state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        let url;
        if (category) {
          // Convert hyphens back to spaces to match the API format
          const formattedCategory = category.replace(/-/g, " ");
          // Fetch products by category
          url = `https://fakestoreapi.com/products/category/${formattedCategory}`;
        } else {
          // If no category, fetch all products
          url = `https://fakestoreapi.com/products`;
        }

        const response = await axios.get(url);
        setAllProducts(response.data); // Store products based on the response
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Re-run effect when category changes

  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <span className="animate-pulse">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div
      className="product-list mt-8 px-4 md:px-8 lg:px-16 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/slLo94wES2M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8b25saW5lJTIwc3RvcmV8ZW58MHx8fHwxNzMyMDA0MTY5fDA&force=true')`, // Replace with your image URL
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {category
          ? `${
              category.replace(/-/g, " ").charAt(0).toUpperCase() +
              category.replace(/-/g, " ").slice(1)
            } Products`
          : "All Products"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.length > 0 ? (
          allProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/details/${product.id}`} // Link to the ProductDetails page
              className="block border p-4 bg-white hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="font-semibold text-gray-700">{product.title}</h3>
              <p className="text-gray-600 mt-1">Price: ${product.price}</p>
            </Link>
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
}

export default Product;
