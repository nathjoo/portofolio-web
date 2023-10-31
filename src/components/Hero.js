import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [typing] = useTypewriter({
    words: ['Front-End Developer', 'UI/UX Designer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <div className="flex w-full xl:px-[120px] xxl:px-0">
      <div className="grid grid-cols-2 h-[896px] w-full justify-center items-center mx-auto max-w-[1440px]">
        <div className="font-hero text-[#383838] tracking-wider flex flex-col col-span-2 max-w-[1440px]">
          <h3 className="text-[40px] block">Hi there!</h3>
          <h1 className="text-[64px] block">
            I’m <span className="text-primary">Nathaniel Jovian,</span> a
          </h1>
          <h1 className="text-[64px] block text-primary">
            {typing}
            <Cursor />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
