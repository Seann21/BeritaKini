import React from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DetailPagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-sm text-grayskin flex items-center font-inter mx-4">
        Item per page <span className="mx-2 font-medium">5</span> 
        <FaChevronDown className="text-gray-500 cursor-pointer" />
        <span className="ml-2">of 200</span>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          className={`px-2 py-1  ${currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-black'}`}
        >
          <FaChevronLeft className='cursor-pointer' />
        </button>
        <span className={`px-2 py-1 mx-1  ${currentPage === 1 ? 'text-blue-500 font-semibold' : 'text-gray-500'}`}>
          1
        </span>
        <span className={`px-2 py-1 mx-1  ${currentPage === 2 ? 'text-blue-500 font-semibold' : 'text-gray-500'}`}>
          2
        </span>
        <button
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          className={`px-2 py-1  ${currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:text-black'}`}
        >
          <FaChevronRight className='cursor-pointer' />
        </button>
      </div>
    </div>
  );
};

export default DetailPagination;
