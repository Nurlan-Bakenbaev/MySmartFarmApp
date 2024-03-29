'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const images = [
  '/hero-images/1.jpg',
  '/hero-images/2.jpg',
  '/hero-images/3.jpg',
];

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="border w-full flex flex-col
     md:flex-row justify-between items-center mt-14"
    >
      <Image
        width={600}
        height={400}
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="rounded-md"
      />
      <div>sdmfkmdsvkmdskf</div>
    </div>
  );
};

export default HeroSlide;
