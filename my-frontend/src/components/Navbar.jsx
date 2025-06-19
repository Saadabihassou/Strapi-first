import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState({});

  async function getNavbar() {
    const response = await axios.get(
      "http://localhost:1337/api/navbar?populate=*"
    );
    console.log(response.data.data);
    setNavbar(response.data.data);
  }

  useEffect(() => {
    getNavbar();
  }, []);

  return (
    <nav className="flex justify-between items-center px-20 py-4 bg-white border-b-2 border-blue-500 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        {navbar.logo?.url && (
          <img
            src={`http://localhost:1337${navbar.logo?.url}`}
            alt="logo"
            className="w-16 h-12 object-contain rounded-full border-red-500 border-2"
          />
        )}
      </div>

      {/* Links */}
      <ul className="flex gap-8">
        {navbar.links?.map((link) => (
          <li key={link.id} className="relative group cursor-pointer">
            <Link
              to={link.url}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
            >
              {link.text}
            </Link>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
          </li>
        ))}
      </ul>

      {/* buttons */}
      <div className="flex gap-4">
        {navbar.button?.map((button) => (
          <button
            key={button.title}
            className={`px-5 py-2 rounded-full font-medium transition duration-300 shadow-sm ${
              button.title === "login button"
                ? "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </nav>
  );
}
