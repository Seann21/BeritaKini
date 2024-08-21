import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const PaginationRekom: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center py-10">
      <div className="text-sm font-inter font-bold text-grayskin mx-7">
        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
      </div>
      <nav>
        <ul className="flex items-center gap-2 mx-20 ">
          <li>
            <button
              onClick={handlePrevious}
              className={`px-2 py-1  ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-primary'} cursor-pointer`}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
          </li>
          {currentPage > 2 && (
            <>
              <li>
                <button onClick={() => paginate(1)} className="px-3 py-1 border text-primary cursor-pointer">
                  1
                </button>
              </li>
              {currentPage > 3 && <li className="mx-1">...</li>}
            </>
          )}

          {pageNumbers.slice(Math.max(currentPage - 2, 0), Math.min(currentPage + 1, totalPages)).map(number => (
            <li key={number} className="mx-1">
              <button
                onClick={() => paginate(number)}
                className={`px-3 py-1 border rounded-lg ${currentPage === number ? 'bg-primary text-white rounded-lg' : 'text-primary'} cursor-pointer`}
              >
                {number}
              </button>
            </li>
          ))}

          {currentPage < totalPages - 2 && (
            <>
              {currentPage < totalPages - 2 && <li className="mx-1">...</li>}
              <li>
                <button onClick={() => paginate(totalPages)} className="px-3 py-1 border rounded-lg text-primary cursor-pointer">
                  {totalPages}
                </button>
              </li>
            </>
          )}
          <li>
            <button
              onClick={handleNext}
              className={`px-2 py-1  ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-primary'} cursor-pointer`}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationRekom;
