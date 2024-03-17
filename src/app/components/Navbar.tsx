import Link from 'next/link';
import React from 'react';
import { NavLinks } from '../utils/Links';
import Mobile from './Mobile';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header
      className="h-[10vh] prime-bg
     text-[#f5f5f5] drop-shadow-xl"
    >
      <div
        className="flex flex-row justify-between
       items-center px-4 w-full "
      >
        <Link
          href={'/'}
          className=" uppercase text-[#ff7f50] 
          text-lg md:text-xl lg:text-3xl "
        >
          Smart-Farm
        </Link>
        <Link href={'/create'}>
          <Image
            className="absolute top-4 border transition-all
             duration-500 ease-in-out
             hover:border-[5px] border-green-800 rounded-full"
            src={'/v921-audi-wit-018.png'}
            width={100}
            height={100}
            alt="Logo"
          />
        </Link>
        <div className="md:flex gap-5 hidden">
          {NavLinks.map(({ link, id, title }) => (
            <Link
              className="text-white warm-color px-3 py-2 rounded-md "
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
