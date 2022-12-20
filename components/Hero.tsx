import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "../assets/me.png";
import Link from "next/link";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hey! I'm Joe", "Developer", "Cybersecurity", "Gamer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='w-32 h-32 rounded-full relative mx-auto object-cover'
        src={ProfilePic}
        alt='Picture of me'
        width={300}
        height={300}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Developer
        </h2>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Cybersecurity
        </h2>
        <h1 className='text-5xl lg:6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#blog'>
            <button className='heroButton'>Blog</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Exp</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skillset</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
