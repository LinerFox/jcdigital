//Import Link
import { Link } from "react-scroll";
import React from "react";
// Import navigation
import { navigation } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transtion-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
