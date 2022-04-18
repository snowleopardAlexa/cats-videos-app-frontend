import { Link } from "react-router-dom";
import logo from '../img/cat-logo.svg'

const Footer = () => {
  return (
    <div>
      <footer className="mt-8 p-4 bg-gradient-to-t from-orange-400 to-sky-400 shadow md:px-6 md:py-8">
        <div className="grid place-items-center">
          <Link to="/" className="text-center">
            <img
              className="ml-2 md:ml-0 rounded-[52px] cursor-pointer"
              src={logo}
              width="100px"
              height="100px"
              alt="cat logo"
            />
          </Link>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2022{" "}
          <Link to="/" className="hover:underline">
            Cats Videos App
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
