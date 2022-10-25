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
                I'm a self taught developer who specializes in Javascript
                Development. I work with ReactJS, NextJS, Angular and various
                Databases to provide a near seamless experience with a dynamic
                update. I started my programming journey in 2014 when I first
                started learning Python to attempt to create my own tools for
                Blender. I've since moved forward to frontend design, web design
                and ReactJS application design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
