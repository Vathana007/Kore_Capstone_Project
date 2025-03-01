import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Header/Logo_Kore.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMenu = [
  {
    id: 1,
    title: "អំពីយើងខ្ញុំ",
    path: "/អំពីយើងខ្ញុំ",
  },
  {
    id: 2,
    title: "ការអប់រំ",
    path: "/ការអប់រំ",  // Keep this if you want the parent to be clickable
    dropdown: [
      { id: 1, title: "អត្តបទ", path: "/អត្តបទ" },
      { id: 2, title: "វីដេអូ", path: "/វីដេអូ" },
    ],
  },
  {
    id: 3,
    title: "សហគម៍",
    path: "/សហគម៍",
  },
  {
    id: 4,
    title: "ពិភាក្សាជាមួយ AI",
    path: "/ពិភាក្សាជាមួយ AI",
  },
  {
    id: 5,
    title: "ទាក់ទងមកពួកយើង",
    path: "/ទាក់ទងមកពួកយើង",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuId) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container flex items-center justify-between px-6">
        {/* Logo Section */}
        <div className="w-20 h-20 lg:ml-5 flex-shrink-0">
          <Link to="/">
            <img
              className="w-full h-full object-contain cursor-pointer"
              src={Logo}
              alt="Logo-Kore"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex md:flex flex-grow justify-center items-center">
          <ul className="flex items-center lg:space-x-8">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <Link
                  to={menu.path}
                  className="font-regular font-medium text-gray-800 text-lg hover:text-blue-300 transition duration-300"
                >
                  {menu.title}
                </Link>

                {menu.dropdown && (
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-40">
                    {menu.dropdown.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 hover:bg-gray-100 border-b last:border-b-0 border-gray-200"
                      >
                        <Link
                          to={item.path}
                          className="block text-gray-800 hover:text-sky-300 transition duration-100"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Register Button (Desktop) */}
        <button className="font-bold hidden lg:flex md:flex items-center bg-blue-300 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-300 shadow-md hover:shadow-sky-300 transition duration-300 lg:mr-5">
          <FaUserCircle className="w-5 h-5 mr-2" />
          បង្កើតគណនី
        </button>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-800 hover:text-blue-300 transition duration-300"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl text-gray-800" />
            ) : (
              <RxHamburgerMenu className="text-2xl text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 right-0 rounded-lg h-full w-56 bg-white shadow-lg p-5 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="flex flex-col space-y-4">
          {NavbarMenu.map((menu) => (
            <li key={menu.id} className="relative">
              {/* If there's a dropdown, show separate link & toggle icon */}
              {menu.dropdown ? (
                <>
                  {/* Top-level link goes to the main path */}
                  <div className="flex justify-between items-center">
                    <Link
                      to={menu.path}
                      className="text-lg text-gray-800 hover:text-blue-300 transition duration-300"
                      onClick={() => setIsMenuOpen(false)} // close the menu on link click
                    >
                      {menu.title}
                    </Link>
                    {/* Toggle button for dropdown */}
                    <button
                      onClick={() => toggleDropdown(menu.id)}
                      className="text-gray-600 ml-2"
                    >
                      {activeDropdown === menu.id ? "-" : "+"}
                    </button>
                  </div>

                  {/* Show dropdown items if active */}
                  {activeDropdown === menu.id && (
                    <ul className="mt-2 bg-gray-100 rounded-lg shadow-md p-2">
                      {menu.dropdown.map((item) => (
                        <li
                          key={item.id}
                          className="px-4 py-2 hover:bg-gray-200 rounded-md"
                        >
                          <Link
                            to={item.path}
                            className="block text-gray-800 hover:text-sky-500 transition duration-200"
                            onClick={() => setIsMenuOpen(false)} // close menu on click
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // If no dropdown, just show a direct link
                <Link
                  to={menu.path}
                  className="text-lg text-gray-800 hover:text-blue-300 transition duration-300"
                  onClick={() => setIsMenuOpen(false)} // close the menu on link click
                >
                  {menu.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Register Button (Mobile) */}
        <button className="flex mt-4 w-full bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-sky-300 shadow-md transition duration-300">
          <FaUserCircle className="w-5 h-5 mr-2" />
          បង្កើតគណនី
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
