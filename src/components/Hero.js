import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [typing] = useTypewriter({
    words: ['Front-End Dev', 'UI/UX Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <div className="flex flex-col w-full justify-center mt-10 px-11 max-w-[1440px]">
      <div className="font-hero font-bold text-9xl text-[#383838] tracking-wider flex flex-wrap">
        <span>HEY,</span>
        <span>IM</span>
        <span>NATHANIEL</span>
        <span>JOVIAN</span>
      </div>
      {/* <h1 className=""></h1> */}
      {/* <div className="font-hero text-9xl font-medium text-[#383838] mt-7">
        <p>
          I'm a {typing} <Cursor />
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
