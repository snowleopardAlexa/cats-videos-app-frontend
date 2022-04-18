import { Link } from "react-router-dom";
import logo from "../img/cat-logo.svg";

const Header = () => {
  return (
    <nav className="fixed w-full z-10 top-0 bg-gradient-to-t from-orange-500 to-sky-400 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img
            className="ml-2 md:ml-0 rounded-[52px]"
            src={logo}
            width="80px"
            height="80px"
            alt="cat logo"
          />
          <span className="ml-4 mt-3 font-Bebas self-center text-3xl md:text-4xl font-semibold whitespace-nowrap dark:text-white">
            Cats Videos App
          </span>
        </Link>
        <div>
          <ul className="md:flex flex-col">
            <li>
              <Link
                to="/"
                className="text-white block pr-4 mt-2 md:pr-0 text-1xl md:text-2xl font-Lato font-bold hover:text-yellow-500"
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
