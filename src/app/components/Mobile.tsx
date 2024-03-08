'use client';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { NavLinks } from '../utils/Links';
const Mobile = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleScreen = () => {
      setScreenSize({
        width: window.innerWidth,
      });
      if (window.innerWidth > 425) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleScreen);
    return () => {
      window.removeEventListener('resize', handleScreen);
    };
  }, []);

  return (
    <div className={` md:hidden`}>
      <button className="relative p-2 border z-50" onClick={handleMenu}>
        {open ? (
          <CloseIcon sx={{ fontSize: '30px', color: 'green' }} />
        ) : (
          <MenuIcon sx={{ fontSize: '30px', color: '#ff7f50;' }} />
        )}
      </button>
      {open && (
        <div
          className="w-[250px] flex flex-col min-h-screen
         text-black bg-slate-50 absolute top-0 right-0"
        >
          {NavLinks.map(({ link, id, title }) => (
            <nav
              className="mt-16 rounded-md text-center p-4 hover:text-white warm-color "
              key={id}
            >
              <Link href={link}>{title}</Link>
            </nav>
          ))}
          <Link
            href={'/'}
            className="bolder uppercase text-2xl mt-10 text-center"
          >
            Smart-Farm
          </Link>
        </div>
      )}
    </div>
  );
};
export default Mobile;
