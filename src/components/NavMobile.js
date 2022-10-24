import React, { useState } from "react";

// Import MenuAlt Icon
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
// import Link
import { Link } from "react-scroll";
// Import X Icon
import { XMarkIcon } from "@heroicons/react/24/outline";
// Import Framer Motion
import { motion } from "framer-motion";
// import navigation data
import { navigation } from "../data";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  // framer motion variants
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 180,
      transition: { type: "spring", stiffness: 160, damping: 60 },
    },
  };
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };
  return (
    <nav className='relative'>
      {/* Menu Icon */}{" "}
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <Bars3BottomRightIcon className='w-8 h-8' />
      </div>
      {/* Circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? "visible" : "hidden"}
        className='w-4 h-4 rounded-full bg-accent fixed top-0 right-0'
      ></motion.div>
      {/* MENU */}
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        {/* Close Icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <XMarkIcon className='w-8 h-8' />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className='mb-8'>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default NavMobile;
