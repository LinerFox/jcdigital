import React from "react";
import Image from "next/image";
import Infosys from "../assets/Infosys.jpg";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <Image
        src={Infosys}
        alt='Infosys Logo'
        height={128}
        width={128}
        className='rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Senior Tech Support</h4>
        <p className='font-bold text-2xl mt-1'>Infosys Limited</p>
        <div className='flex space-x-2 my-2'>
          <Image
            src={Infosys}
            height={40}
            width={40}
            alt=''
            className='w-10 rounded-full'
          />
          <Image
            src={Infosys}
            height={40}
            width={40}
            alt=''
            className='w-10 rounded-full'
          />
          <Image
            src={Infosys}
            height={40}
            width={40}
            alt=''
            className='w-10 rounded-full'
          />
          <Image
            src={Infosys}
            height={40}
            width={40}
            alt=''
            className='w-10 rounded-full'
          />
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started working... - Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
          <li>Summary Points Summary Points Summary Points Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
