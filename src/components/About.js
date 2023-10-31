import React from 'react';
import Portrait from '../assets/Portrait.png';

const About = () => {
  return (
    <div className="w-full mx-auto bg-highlight py-[96px] px-[120px] flex justify-center items-center">
      <div className="grid grid-cols-2 gap-8 max-w-[1440px]">
        <div className="flex flex-col gap-[42px]">
          <h1 className="text-primary text-[40px] font-hero font-semibold">
            About Me
          </h1>
          <p
            className="font-body text-[18px] text-[#525665] flex"
            style={{ lineHeight: 1.5 }}
          >
            I'm a recent Computer Engineering graduate with a strong foundation
            in web development, including HTML, CSS, JavaScript, and ReactJS. I
            also have expertise in UI/UX design, enabling me to create
            functional and visually engaging user-centric interfaces. <br />
            <br />
            My passion is to excel as a Front-End Developer, and I've honed my
            skills through dedicated BootCamp training, formal education, and
            self-directed learning. <br />
            <br />
            I've completed various projects showcasing my ability to design and
            develop responsive web applications with a keen focus on UI/UX
            principles.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <img
            src={Portrait}
            className="w-full h-auto max-w-[406px] max-h-[406px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
