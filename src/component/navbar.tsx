import logo from "../assets/react.svg";
import { FaMoon, FaSun } from "react-icons/fa";
import SearchBar from "./searchBar";
import { Props } from "../Entities/NavbarProps";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="flex items-center space-x-4 ">
        <Link to="/">
          <img src={logo} width={60} alt="Logo" />
        </Link>
      </div>
      <div className="flex-grow mx-4">
        <SearchBar />
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
      >
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
};

export default Navbar;
