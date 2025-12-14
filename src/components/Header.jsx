import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container relative mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">AI Assistant</div>

        {/* Hamburger button for mobile */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden p-2 focus:outline-none transition-all"
        >
          <GiHamburgerMenu
            className={`text-2xl transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>

        {/* Nav for mobile and desktop dropdown */}
        <nav
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
        >
          <ul className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <a
                href="#hero"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-600 py-2 md:py-0"
              >
                Hero
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-600 py-2 md:py-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#demo"
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-600 py-2 md:py-0"
              >
                Demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
