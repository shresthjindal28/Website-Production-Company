import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Design from "./Design";
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
      <div className="w-11/12 mx-auto xl:mx-0 xl:w-full xl:h-screen xl:pl-5 p-1 flex xl:flex-row xl:items-center xl:justify-center text-gray-400">
        <div className="xl:flex xl:flex-col xl:items-start xl:justify-center flex-1">
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

          <div className="">
            <h2 className="xl:text-3xl font-normal xl:ml-5 xl:mt-5">
              We are a dynamic team of skilled web developers, passionate about
              creating innovative and efficient digital solutions.
            </h2>
            <div className="flex ml-16 mt-6 text-gray-600 gap-8">
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
          </div>
        </div>

        <div className="hidden xl:block">
          <Design w={600} h={600} />
        </div>
      </div>
    </>
  );
}

export default About;
