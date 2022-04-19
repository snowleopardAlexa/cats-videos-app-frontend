import { Link } from "react-router-dom";
import logo from "../img/cat-logo.svg";

const Header = () => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-gradient-to-t from-orange-500 to-sky-400 py-2.5">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            className="w-16 md:w-18 ml-4 rounded-[52px]"
            src={logo}
            alt="cat logo"
          />
          <span className="ml-4 mt-3 font-Bebas self-center text-2xl md:text-4xl font-semibold whitespace-nowrap dark:text-white">
            Cats Videos App
          </span>
        </Link>
        <div className="flex">
          <ul className="flex">
            <li className="mr-6">
              <Link
                to="/"
                className="block text-white pr-1 mt-2 md:pr-0 text-1xl md:text-2xl font-Lato font-bold hover:text-yellow-500"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
