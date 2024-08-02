import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Spline from '@splinetool/react-spline';

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function About() {
  const [text] = useTypewriter({
    words: [
      "are Developers",
      "Design & Develop websites",
      "Design awesome UI/UX",
    ],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 50,
  });

  return (
    <>
      <div className="w-11/12 mx-auto xl:mx-0 xl:w-full xl:h-screen xl:pl-5 p-1 xl:absolute flex xl:flex-row xl:items-center xl:justify-center text-gray-400">
        <div className=" flex items-center justify-center">
          <div className="xl:flex xl:flex-col xl:items-start xl:justify-start flex-1">
             <h1 className="xl:text-4xl font-bold xl:ml-5 xl:mb-3 ">
              HI &#128075;{" "}
            </h1>
            <h1 className="xl:text-4xl font-bold xl:ml-5">
              We{" "}
              <span className="font-bold xl:text-4xl text-blue-400 ">{text}</span>
              <span>
                <Cursor />
              </span>
            </h1>

            <h2 className="xl:text-3xl font-normal xl:ml-5 xl:mt-5">
              We are a dynamic team of <br /> skilled web developers, passionate <br /> about
              creating innovative and efficient digital solutions.
            </h2>
            <div className="flex ml-6 mt-9 text-gray-600 gap-8">
              <FaGithub size={35} className="hover:text-white" />
              <FaFacebook size={35} className="hover:text-white" />
              <FaInstagram size={35} className="hover:text-white" />
              <a
                href="https://www.linkedin.com/in/rohit-dubey-637a8627a/"
                target="_blank"
              >
                <FaLinkedinIn size={35} className="hover:text-white" />
              </a>
            </div>
          </div >
          <div className="w-full h-[100vh] absolute xl:relative flex justify-end flex-1">
          <Spline
        scene="https://prod.spline.design/uQU40Ro0vG0lyJd3/scene.splinecode" 
      />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
