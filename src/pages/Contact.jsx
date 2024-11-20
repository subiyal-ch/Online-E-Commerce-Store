import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 w-full p-4 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/slLo94wES2M/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8b25saW5lJTIwc3RvcmV8ZW58MHx8fHwxNzMyMDA0MTY5fDA&force=true')`, // Replace with your image URL
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          Contact Page
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Connect with us through social media
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://web.facebook.com/m.faza.77985"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaFacebook
              size={40}
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            />
          </a>
          <a
            href="https://twitter.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaTwitter
              size={40}
              className="text-blue-400 hover:text-blue-600 transition duration-300"
            />
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram
              size={40}
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-subiyal/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin
              size={40}
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
