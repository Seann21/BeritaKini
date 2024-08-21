import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';
import Pagination from './Pagination';

interface NewsData {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  thumbnail: string;
}

const HeroSection: React.FC = () => {
  const data = useLoaderData() as NewsData[];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // Track direction for animation

  const currentData = data[currentSlide];

  // Variants for sliding animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handlePrevClick = () => {
    setDirection(-1); // Set direction to left
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setDirection(1); // Set direction to right
    setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="relative bg-white p-5 md:p-8 overflow-hidden my-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 px-7">
          <h1 className="text-bluedark uppercase font-semibold text-sm mb-4">Headline</h1>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.8 },
            }}
          >
            <p
              className="text-4xl font-bold mb-4 font-NunitoSans"
              dangerouslySetInnerHTML={{ __html: currentData.title }}
            />
            <p className="text-grayskin font-inter font-medium text-lg mb-6">{currentData.description}</p>
            <div className="flex items-center text-grayskin font-inter font-semibold mb-7">
              <FaCalendarAlt className="mr-2" />
              <span>{new Date(currentData.pubDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg transition-transform ease-in-out duration-300 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <a href={currentData.link} className="flex items-center">
                Baca Selengkapnya <MdOutlineArrowOutward className="ml-2" size={20} />
              </a>
            </motion.button>
          </motion.div>
        </div>
        <div className="w-[600px] h-[400px] my-14 flex items-center justify-center">
          <motion.img
            key={currentSlide}
            src={currentData.thumbnail}
            alt={currentData.title}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
        </div>
      </div>
      <Pagination
        currentSlide={currentSlide}
        totalSlides={data.length}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
    </section>
  );
};

export default HeroSection;
