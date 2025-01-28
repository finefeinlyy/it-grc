import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg flex space-x-8 items-center">
      {[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "NIST", path: "/frameworks/NIST" },
        { name: "ISO", path: "/frameworks/ISO27001" },
        { name: "COBIT", path: "/frameworks/COBIT" },
        { name: "PCI-DSS", path: "/frameworks/PCI-DSS" },
      ].map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition ${
              isActive ? "text-green-400" : "hover:text-gray-400"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
