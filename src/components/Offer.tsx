import React, { useState } from 'react';
import styles from '../styles/PaginationDots.module.css';

const cardsData = [
  { title: 'malang mbois', image: '/malangby.png' },
  { title: 'malang mbois', image: '/malangby.png' },
  { title: 'malang mbois', image: '/malangby.png' },
];

const Offer: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="relative w-[78rem] mx-5 h-[400px] overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Dots - moved outside the container */}
      <div className="flex justify-center mt-4">
        {cardsData.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentSlide === index ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
