import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";
const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>
            What clients are saying
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            consectetur incidunt ipsa cupiditate voluptate ratione hic ex unde
            mollitia qui?
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
