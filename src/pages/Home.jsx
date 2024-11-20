import React from "react";
import Categories from "../component/Categories";
import { Link } from "react-router-dom"; // If you prefer SPA navigation
import Product from "./Product";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/slLo94wES2M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8b25saW5lJTIwc3RvcmV8ZW58MHx8fHwxNzMyMDA0MTY5fDA&force=true')`, // Replace with your image URL
      }}
    >
      <div className="bg-white bg-opacity-70 p-6 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
        <p className="text-lg text-gray-800 mb-4">
          Discover the best products at unbeatable prices. Browse through our
          wide selection and find what suits you best!
        </p>
        <div className="mt-8">
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Browse Products
          </Link>
        </div>
      </div>
      <Categories />
      {/* <Product /> */}
    </div>
  );
}

export default Home;
