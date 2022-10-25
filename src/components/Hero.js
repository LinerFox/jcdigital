import Image from "../assets/img/HeroImg.png";
import React from "react";
const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          {/* Left Side */}{" "}
          <div className='flex-1 flex  flex-col items-center lg:items-start'>
            <p className='text-lg text-accent mb-[22px]'>Hey, I'm Joe</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left '>
              I'm constantly building new projects and clones of websites with
              innovative features that the originals do not have.
            </p>
          </div>
          {/* Right Side */}
          <div className='hidden lg:flex flex-1 justify-end items-end md:items-center lg:items-center h-full'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
