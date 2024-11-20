import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Store</Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-200 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
