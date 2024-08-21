import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface PaginationProps {
  currentSlide: number;
  totalSlides: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentSlide,
  totalSlides,
  handlePrevClick,
  handleNextClick,
}) => {
  return (
    <div className="flex justify-center items-center mt-4 gap-6">
      <button
        onClick={handlePrevClick}
        className="p-2 bg-transparent rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <MdChevronLeft className="w-5 h-5 text-gray-800 opacity-75" />
      </button> 
      <span className="text-gray-700 font-medium">
        {currentSlide + 1} <span className='px-5'>dari</span>{totalSlides}
      </span>
      <button
        onClick={handleNextClick}
        className="p-2 bg-transparent rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <MdChevronRight className="w-5 h-5 text-gray-800 opacity-75" />
      </button>
    </div>
  );
};

export default Pagination;
