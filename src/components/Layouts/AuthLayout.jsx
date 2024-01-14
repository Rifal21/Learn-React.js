import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs border rounded p-5 border-blue-500">
        <button
          className="absolute top-5 right-5 bg-blue-600 text-white rounded p-2"
          onClick={() => setDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="font-bold text-blue-600 text-3xl mb-2 text-center">
          {title}
        </h1>
        <p className="font-medium text-slate-500 mb-5 text-center">
          Welcome , please enter your detail
        </p>
        {children}
        <p className="text-sm text-slate-500 text-start mt-3">
          {type === "login" ? "Have an account?" : "already an account?"}
          {type === "login" && (
            <Link to="/register" className="text-blue-600 font-semibold pl-1">
              Sign up
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-600 font-semibold pl-1">
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
