import config from "../config.json";
import Image from "next/image";
import logo from "../public/logo.jpg";

const Nav = () => {
  return (
    <nav class="flex items-center justify-between p-6 h-full bg-white drop-shadow-mds">
      <a href="/" className="flex text-gray-700 hover:text-indigo-700">
        <div class=" h-14 w-14 rounded-full  text-sm text-white font-semibold shadow-lg hover:shadow-lg">
          <Image src={logo} className="rounded-full" />
        </div>
        <span className="py-3.5 ml-5 text-xl font-semibold font-sans">MeetUp</span>
      </a>
      <ul className="pr-5">
        <li class="space-x-5 text-xl">
          <a
            href="/"
            class="hidden sm:inline-block text-gray-700 hover:text-indigo-700"
          >
            Home
          </a>
          <a
            href="#"
            class="hidden sm:inline-block text-gray-700 hover:text-indigo-700"
          >
            About
          </a>
          <a
            href="#"
            class="hidden sm:inline-block text-gray-700 hover:text-indigo-700"
          >
            Contact
          </a>
        </li>
        <div class="sm:hidden space-y-1 hover:cursor-pointer">
          <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
          <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
          <span class="w-10 h-1 bg-gray-600 rounded-full block"></span>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
