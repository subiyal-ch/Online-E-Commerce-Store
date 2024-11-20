import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/categories`
        );
        setCategories(response.data); // Store categories from API
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Error fetching categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <span className="animate-pulse">Loading categories...</span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="category-list mt-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Product Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/products/${category.replace(/\s/g, "-")}`} // Replace spaces with hyphens
            className="bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-semibold px-6 py-3 rounded-md shadow-md text-center transform hover:scale-105 transition-all duration-200 ease-in-out"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
