import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isSticky ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="p-4 text-white flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-6 items-center">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
