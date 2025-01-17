"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", target: "/" },
    { id: 2, text: "Cours", target: "/cours" },

    { id: 4, text: "About", target: "/about" },
    { id: 5, text: "Contact", target: "/contact" },
    { id: 6, text: "Blog", target: "/blog" },
  ];
  return (
    <div className="flex justify-between items-center bg-black h-20 bg-gray-200 px-2">
      <div className="   text-secondary">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-secondary">GENIUS.</h1>
      </div>
      <div className="text-heading text-2xl font-bold">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex">
          {navItems.map((item) => (
            <Link href={item.target} key={item.id}>
              <li className="p-4 hover:bg-main rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
                {item.text}
              </li>
            </Link>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-3xl font-bold text-main m-4">GENIUS.</h1>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <Link href={item.target} key={item.id} prefetch={false}>
              <li className="p-4 border-b rounded-xl hover:bg-secondary duration-300 hover:text-black cursor-pointer border-gray-600">
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="space-x-4 flex-row hidden lg:block">
        <Link href="/auth/register" prefetch={false}>
          <button className="bg-white-700 text-heading font-bold px-6 rounded-sm h-10 border-2 border-secondary">
            s'incrire
          </button>
        </Link>
        <Link href="/auth/login" prefetch={false}>
          <button className="bg-white-700 text-heading font-bold px-6 rounded-sm h-10 border-2 border-secondary">
            se connecter
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
