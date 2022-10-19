import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:karkinoscode@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.message}(${formData.email})`;
  };

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
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='w-7 h-7 text-[#4564f0] animate-pulse' />
            <p className='text-2xl'>+1-813-861-3250</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeOpenIcon className='w-7 h-7 text-[#4564f0] animate-pulse' />
            <p className='text-2xl'>karkinoscode@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='w-7 h-7 text-[#4564f0] animate-pulse' />
            <p className='text-2xl'>Florida, USA</p>
          </div>
        </div>
        <form
          className='flex flex-col space-y-2 w-fit mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex space-x-2'>
            <input
              {...register("name")}
              placeholder='Name'
              className='contactInput'
              type='text'
              required
            />
            <input
              {...register("email")}
              placeholder='Email'
              className='contactInput'
              type='email'
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder='Subject'
            className='contactInput'
            type='text'
            required
          />
          <textarea className='contactInput' {...register("message")} />
          <button
            type='submit'
            className='bg-[#4564f0] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
