// Import Image for About Section
import Image from "../assets/img/About.webp";
import React from "react";
const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt='About'
          />
          <div className='flex flex-col items-center text-center lg:items-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Liner Fox
              </h2>
              <p className='mb-4 text-accent'>Web Developer & Designer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos amet magnam necessitatibus iusto excepturi
                distinctio assumenda molestias numquam quod dicta!
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
