import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Design from './Design'

function About() {
  const [text] = useTypewriter({
    words:['are Developers','Design & Develop websites', 'Design awesome UI/UX'],
    loop: {},
    typeSpeed: 90,
    deleteSpeed: 50,
  })



  return (
    <>
    <div className="w-full h-[90vh] pl-5 p-1 flex flex-row items-center justify-center text-gray-400">
      <div className="flex flex-col items-start justify-center flex-1">
      <h1 className="text-4xl font-bold ml-5 mb-3 " >HI &#128075; </h1>
      <h1 className="text-4xl font-bold ml-5">
        We <span className="font-bold text-4xl text-blue-400 ">
            {text}
        </span>
        <span><Cursor/></span>
      </h1>

      <h2 className="text-3xl font-normal ml-5 mt-3" >Our team consist of <br />
      total four members.  </h2>

      </div>
    <div className=" ">
      <Design/>
    </div>
    </div>
    
    </>
  );
}

export default About;
