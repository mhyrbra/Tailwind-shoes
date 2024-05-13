import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetails from "./components/ShoeDetails";
import { SHOE_LIST } from "./components/constant";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("isDarkMode") === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  function addToCartHandler(product, qty, size) {
    const updatedCartItems = [...cartItems];
    if (qty && size) {
      const existingItem = updatedCartItems.find(
        (item) => item.product.id === product.id,
      );
      if (existingItem) {
        existingItem.qty = qty;
        existingItem.size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);
    }
  }

  function removeCartHandler(productId) {
    const copyCartItems = [...cartItems];
    const updatedCartItems = copyCartItems.filter(
      (item) => item.product.id !== productId,
    );
    setCartItems(updatedCartItems);
  }

  return (
    <div className="animate-fadeIn p-10 dark:bg-night-50 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetails shoe={currentShoe} addToCart={addToCartHandler} />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onRemoveCart={removeCartHandler} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-night-50 px-4 py-2 text-white shadow-lg dark:bg-white dark:text-night "
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
