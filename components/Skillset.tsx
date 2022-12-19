import React from "react";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
type Props = {};

export default function Skillset({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className=' absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl'>
        Skillset
      </h3>
      <h3 className='top-36 uppercase tracking-[3px] absolute text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
