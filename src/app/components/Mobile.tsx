'use client';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { NavLinks } from '../utils/Links';
const Mobile = () => {
  const [open, setOpen] = useState(true);
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className=" md:hidden">
      <button className="relative z-50" onClick={handleMenu}>
        {open ? (
          <CloseIcon sx={{ fontSize: '30px' }} />
        ) : (
          <MenuIcon sx={{ fontSize: '30px' }} />
        )}
      </button>
      <div className=" absolute top-0 right-0 border border-red-500 ">
        {open &&
          NavLinks.map(({ link, id, title }) => (
            <nav
              className=" flex flex-row w-[250px] max-h-[100vh] justify-center gap-5"
              key={id}
            >
              <Link href={link}>{title}</Link>
            </nav>
          ))}
      </div>
    </div>
  );
};
export default Mobile;
