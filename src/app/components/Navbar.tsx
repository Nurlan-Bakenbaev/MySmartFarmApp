import Link from 'next/link';
import React from 'react';
import { NavLinks } from '../utils/Links';
import Mobile from './Mobile';

const Navbar = () => {
  return (
    <header className=" h-[10vh] prime-bg text-[#f5f5f5] drop-shadow-xl">
      <div className="flex flex-row justify-between items-center px-4 w-full ">
        <Link href={'/'} className="bolder text-lg md:text-xl lg:text-3xl ">
          Smart-Farm
        </Link>
        <div className="md:flex gap-5 hidden">
          {NavLinks.map(({ link, id, title }) => (
            <Link
              className="text-white hover:text-blue-500"
              key={id}
              href={link}
            >
              {title}
            </Link>
          ))}
        </div>
        <Mobile />
      </div>
    </header>
  );
};

export default Navbar;
