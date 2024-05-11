import { TbShoppingBag } from "react-icons/tb";
import Nikelogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export default function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* logo */}
      <a href="#">
        <Nikelogo className="h-20 w-20" />
      </a>
      {/* burger button */}
      <button
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden"
        onClick={() => setIsMobileMenuShown((prevState) => !prevState)}
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu */}

      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="flex flex-col rounded-lg border border-gray-50 bg-gray-50 p-4 text-lg lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent">
          {ROUTES.map((route, i) => (
            <li
              key={route}
              className={`cursor-pointer rounded px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${i + 1 === ROUTES.length || i + 2 === ROUTES.length ? "lg:text-white" : ""}`}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="fixed bottom-4 left-4 lg:static"> */}
      <div
        onClick={onClickShoppingBtn}
        className="btn-press-anim flex-center fixed bottom-4 left-4 h-12 w-12 cursor-pointer rounded-full bg-white shadow-md lg:static lg:mr-8"
      >
        <TbShoppingBag />
      </div>
      {/* </div> */}
    </nav>
  );
}
