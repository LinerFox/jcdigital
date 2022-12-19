import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'
    >
      <h3 className='absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='/assets/me.png'
        className='-mb-20 md:mb-0 flex-shrink-0 object-cover w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#f7AB0A]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti
          in laudantium fugit excepturi sit dolorum asperiores vitae aliquam?
          Corporis obcaecati, distinctio quia est ex vero. Odio ipsum, quo
          repellendus, molestias aperiam totam labore et iusto, rem tempore
          reiciendis veritatis autem vel omnis quidem sint obcaecati libero
          maiores quisquam unde.
        </p>
      </div>
    </motion.div>
  );
}
