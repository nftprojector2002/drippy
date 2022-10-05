import { useState } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full bg-white shadow drop-shadow-3xl bg-opacity-70 justify-between flex px-2 py-5 md:px-4 md:items-center md:flex md:px-4">

          {/* Site link */}
          <a  className="text-xl md:text-5xl font-bold font-groovy text-indigo-800" href="#">
              Drippy<br />Smiles
          </a>

          {/* Logo Image */}
          <div className="w-16 h-16 grid items-center md:w-28 md:h-28 ">
            <img src="/asset/Drippy smiles logo.png" alt="logo" />
          </div>

          {/* Links */}
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-macaria text-3xl text-indigo-800">
                <li className="hover:text-indigo-600">
                  <a href="#about">about</a>
                </li>
                <li className="hover:text-indigo-600">
                  <a href="#roadmap">dripmap</a>
                </li>
                <li className="hover:text-indigo-600">
                  <a href="#team">team</a>
                </li>
                <li className="hover:text-indigo-600">
                  <a href="#faq">feq</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Wallet Button */}
          <div className="">
            <button className="rounded-full bg-indigo-800 text-gray-100 p-3 text-3xl font-groovy ">Connect</button>
          </div>

          {/* Twitter */}
          <div className="grid w-10 h-10 items-center md:w-16 md:h-16 ">
            <a href="#">
              <img src="/asset/twitter_icon.png" alt="twitter" />
            </a>
          </div>

          <div className="grid items-center md:hidden">
              <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
              >
                  {navbar ? (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                      >
                          <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                          />
                      </svg>
                  ) : (
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                          />
                      </svg>
                  )}
              </button>
            </div>

      </nav>
    );
}
