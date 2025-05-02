import React, { useContext, useState } from "react";
import {
  Apple,
  Menu,
  Moon,
  ShoppingBagIcon,
  Sun,
  X,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../ShoppingCartContext/ShoppingCartProvider";
import { MdDelete } from "react-icons/md";

export default function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const {
    cartItems,
    setCartItems,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = useContext(ShoppingCartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 80 : 0;
  const checkOut = () => {
    if (cartItems.length > 0) {
      navigate("/check-out");
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <nav className="bg-gray-200 dark:bg-gray-900 shadow-md relative z-50">
      <div className=" mx-auto p-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:cursor-pointer">
          <Apple onClick={()=> navigate("/")} />
        </div>
        <div className="flex items-center gap-2">
          {/* Hamburger Menu Button */}
          <button
            aria-label="Menu"
            type="button"
            aria-expanded={isOpen ? "true" : "false"}
            aria-controls="mobile-menu"
            id="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none transition-all duration-300  "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links (Desktop) */}

          <div className="hidden md:flex items-center">
            {/* Smart Phones Dropdown */}
            <div className="relative group">
              <Link
                to="/smartphones"
                className="text-gray-900 dark:text-gray-100 hover:text-blue-500 cursor-pointer"
              >
                Smart Phones
              </Link>
              <div
                className={` absolute top-full left-0  mt-6 z-40 transition-all duration-300 ease-in-out `}
              ></div>
            </div>
            {/* Dropdown Section */}

            {/* About */}
            <Link
              to="/about"
              className="text-gray-900 dark:text-gray-100 hover:text-blue-500"
            >
              About Apple
            </Link>

            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              aria-pressed={darkMode ? "true" : "false"}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {darkMode ? (
                <Sun
                  size={24}
                  className="text-yellow-600 dark:text-gray-100 "
                />
              ) : (
                <Moon size={24} className="text-gray-900 dark:text-gray-100" />
              )}
            </button>
          </div>

          {/* Navigation Links (Mobile) */}
          <div
            className={`fixed inset-0 bg-gray-200
             dark:bg-gray-900 text-gray-900 dark:text-gray-100
              flex flex-col items-center justify-center
               space-y-6 transform transition-transform duration-300 z-50 ${
                 isOpen ? "translate-x-0" : "translate-x-full"
               } md:hidden`}
          >
            <button
              aria-label="Close Menu"
              type="button"
              aria-expanded={isOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-gray-900
             dark:text-gray-100"
            >
              <X size={30} />
            </button>
            <Link
              to="/smartphones"
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-blue-500"
            >
              Smart Phones
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-xl hover:text-blue-500"
            >
              About
            </Link>

            <button
              aria-label="Toggle Dark Mode"
              type="button"
              aria-pressed={darkMode ? "true" : "false"}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200
             dark:hover:bg-gray-700 transition duration-300"
            >
              {darkMode ? (
                <Sun
                  size={24}
                  className="text-yellow-600
               dark:text-gray-100 "
                />
              ) : (
                <Moon
                  size={24}
                  className="text-gray-900
               dark:text-gray-100"
                />
              )}
            </button>
            {/* cart icon */}
          </div>
          {/* side bar */}
          <button
            aria-label="side-bar"
            type="button"
            aria-expanded={openSideBar ? "true" : "false"}
            aria-controls="side-bar"
            id="side-bar"
            onClick={() => setOpenSideBar(true)}
            className="p-2 rounded-lg
           focus:outline-none transition-all duration-300  "
          >
            {<ShoppingBagIcon />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}

        <div
          className={` fixed right-0 top-0 h-full w-2/3 sm:w-1/3
             bg-gray-200
             dark:bg-gray-900 text-gray-900
             dark:text-gray-100  
               overflow-y-auto
              transform transition-transform
               duration-300 z-50 ${
                 openSideBar ? "translate-x-0" : "translate-x-full"
               }`}
        >
          <div className="side-bar-body p-5 mt-10 ">
            {cartItems?.length === 0 ? (
              <div className="h-96 mx-auto flex items-center justify-center">
                <p className="text-xl font-bold text-red-800">
                  your cart is empty
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-800 dark:text-gray-100">
                  Cart Details:
                </h2>
                {cartItems?.map((item) => (
                  <div className="" key={item.id}>
                    <div className="grid grid-cols-2 gap-2 p-1">
                      <div>
                        <img
                          className=" h-32"
                          src={item.images[0]}
                          alt={item.brand}
                        />
                      </div>
                      <div className="m-2 ">
                        <p className="font-bold ">{item.brand}</p>

                        <p className="font-thin">
                          price:{item.price.toFixed()}$
                        </p>
                        <div className="flex items-center gap-1 text-yellow-400">
                          {Array.from({
                            length: Math.round(item.rating).toFixed(),
                          }).map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-evenly items-center p-2">
                      <div className="grid grid-cols-3 p-2 border border-gray-500 dark:border-gray-100 rounded-lg">
                        <button
                          aria-description="increase quantity"
                          className="p-1 bg-cyan-950 rounded-xl text-lg text-yellow-50 font-bold"
                          onClick={() => increaseItemQuantity(item.id)}
                        >
                          +
                        </button>
                        <p className="text-center p-1">piece:{item.quantity}</p>
                        <button
                          aria-description="decrease quantity"
                          className="p-1 bg-red-700 rounded-xl text-lg text-yellow-50 font-bold"
                          onClick={() => decreaseItemQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="p-1 m-2 bg-red-700 rounded-xl text-lg text-yellow-50 font-bold"
                        aria-description="delete item"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <MdDelete />{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
            <div className="flex flex-col items-center justify-center mt-4 border-t-2 border-gray-800 dark:border-gray-100 pt-4">
              <p>Shipping :{shipping}</p>
              <p className="text-lg sm:text-base font-bold text-gray-900 dark:text-gray-100">
                Total Price:{`${(totalPrice + shipping).toFixed()}`} $
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-2">
              <button
                onClick={() => checkOut(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Checkout
              </button>
              <button
                onClick={() => clearCart(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <button onClick={() => setOpenSideBar(false)}>
            <X
              size={35}
              className="absolute top-5 right-5
               text-gray-900 dark:text-gray-100 "
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
