import logo from '../img/cat-logo.svg'

const Header = () => {
  return (
    <nav className="bg-teal-600 sm:px-4 py-2.5">
      <div className="">
        <a href="https://..." class="flex items-center">
          <img
            className="rounded-[52px]"
            src={logo}
            width="80px"
            height="80px"
            alt="cat logo"
          />
          <span class="ml-4 font-Bebas self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            Cats Videos App
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
