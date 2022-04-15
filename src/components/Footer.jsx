import logo from '../img/cat-logo.svg'

const Footer = () => {
  return (
    <div>
      <footer class="mt-8 p-4 bg-teal-600 shadow md:px-6 md:py-8">
        <div class="grid place-items-center">
          <a href="https://..." className="text-center">
            <img
              className="ml-2 md:ml-0 rounded-[52px] cursor-pointer"
              src={logo}
              width="100px"
              height="100px"
              alt="cat logo"
            />
          </a>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <span class="block text-sm text-white sm:text-center">
          © 2022{" "}
          <a href="https://..." className="hover:underline">
            Cats Videos App
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
