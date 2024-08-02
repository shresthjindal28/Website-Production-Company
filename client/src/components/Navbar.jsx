import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useEffect } from "react";
// import { CiMenuFries } from "react-icons/ci";

function Navbar() {
  const [click, setClick] = useState(false);

  let aboutEl = null;
  useEffect(() => {
    aboutEl = document.body.querySelector("#about-section");
    // console.log(aboutEl);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="h-full lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-800 transition">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            HOME
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            WORK
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            ABOUT
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            CONTACT
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="h-10vh flex justify-between z-50 text-white/25 lg:py-5 px-15 py-4 flex-1">
      <div className="flex items-center flex-1 px-10">
        <span className="w-[17vh] sm:w-[37vh]">
          <img src="./public/logo.avif" alt="" />
        </span>
      </div>
      <div className="lg:flex md:flex lg: flex-1 items-center justify-end hidden ">
        <ul className="flex gap-12 mr-16 text-[20px]">
          <li className=" hover:text-white/100 transition  text-gray-600 cursor-pointer ">
            Home
          </li>
          <li className=" hover:text-white/100 transition  text-gray-600 cursor-pointer ">
            Work
          </li>
          <li
            className=" hover:text-white/100 transition  text-gray-600 cursor-pointer "
            onClick={() => {
              aboutEl?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </li>
          <li className=" hover:text-white/100 transition  text-gray-600 cursor-pointer ">
            Contact
          </li>
        </ul>
      </div>
      <div>{click && content}</div>
      <button className="m-4 block sm:hidden transition " onClick={handleClick}>
        {click ? <FaTimes size={30} /> : <TiThMenu size={30} />}
      </button>
    </div>
  );
}

export default Navbar;
