import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I&apos;m the Developer you&apos;re looking for.{" "}
          <span className='decoration-[#4564f0] underline'>
            Let&apos;s Talk
          </span>
        </h4>
        <div>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='w-7 h-7 text-[#4564f0]' />
            <p>+1-813-861-3250</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeOpenIcon className='w-7 h-7 text-[#4564f0]' />
            <p>karkinoscode@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='w-7 h-7 text-[#4564f0]' />
            <p>+1-813-861-3250</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
