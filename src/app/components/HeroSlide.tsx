'use client';
import Image from 'next/image';
import React, { useState } from 'react';

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

  return (
    <div className=" relative mt-14">
      <div className="absolute flex justify-between top-1/2 w-full border">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <Image
        width={600}
        height={400}
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="mx-auto"
      />
    </div>
  );
};

export default HeroSlide;
