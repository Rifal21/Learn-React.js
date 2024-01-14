import Button from "../Elements/Button";
import { useLogin } from "../../Hooks/useLogin";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty + 1;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end px-5 h-20 bg-blue-600 text-white items-center gap-5">
      {username}

      <Button classname="bg-red-600" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        item: {totalCart} | price: ${total}
      </div>
      <button
        className="flex top-5 right-5 bg-orange-400 text-white rounded p-2"
        onClick={() => setDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;
