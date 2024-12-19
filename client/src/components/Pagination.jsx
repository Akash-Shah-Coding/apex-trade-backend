import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPageValid, totalFilteredPages, handlePageChange }) => {
  const maxPagesToShow = 3; // Max number of page buttons to display
  const [pageRange, setPageRange] = useState({ startPage: 1, endPage: maxPagesToShow });

  // Function to handle "Next" button click
  const handleNext = () => {
    const newStartPage = pageRange.startPage + maxPagesToShow;
    const newEndPage = Math.min(newStartPage + maxPagesToShow - 1, totalFilteredPages);
    if (newStartPage <= totalFilteredPages) {
      setPageRange({ startPage: newStartPage, endPage: newEndPage });
      handlePageChange(newStartPage); // Automatically move to the first page in the new range
    }
  };

  // Function to handle "Previous" button click
  const handlePrevious = () => {
    const newStartPage = Math.max(1, pageRange.startPage - maxPagesToShow);
    const newEndPage = newStartPage + maxPagesToShow - 1;
    setPageRange({ startPage: newStartPage, endPage: Math.min(newEndPage, totalFilteredPages) });
    handlePageChange(newStartPage); // Automatically move to the first page in the previous range
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white dark:bg-gray-800 px-4 py-3 sm:px-6">


      {/* Pagination controls for larger screens */}
      <div className="flex flex-1 items-center justify-between mt-4">
        <div>
          <p className="hidden sm:flex text-sm text-gray-700 dark:text-gray-300">
            Showing page <span className="font-medium">{currentPageValid}</span> of{' '}
            <span className="font-medium">{totalFilteredPages}</span>
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
            <button
              onClick={handlePrevious}
              disabled={currentPageValid === 1 || pageRange.startPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Display limited range of page numbers */}
            {Array.from({ length: pageRange.endPage - pageRange.startPage + 1 }, (_, i) => pageRange.startPage + i).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                aria-current={page === currentPageValid ? 'page' : undefined}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${page === currentPageValid
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-gray-200'
                    : 'text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 dark:ring-gray-600'
                  } hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPageValid === totalFilteredPages || pageRange.endPage === totalFilteredPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
