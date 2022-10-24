// Import Logo
import Logo from "../assets/img/logo.svg";
import React from "react";
// Import Social Data
import { social } from "../data";
const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          {/* Social Icons */}
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div>
            <img src={Logo} alt='' />
          </div>
          {/* copyright */}
          <p>&copy; 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
