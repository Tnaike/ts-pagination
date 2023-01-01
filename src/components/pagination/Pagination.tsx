import React from 'react';

import './pagination.css';

type Position = 'start' | 'center' | 'end';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
  doubleArrows?: boolean;
  firstButton?: React.ReactElement;
  previousButton?: React.ReactElement;
  nextButton?: React.ReactElement;
  lastButton?: React.ReactElement;
  align?: Position;
  dots?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className = '',
  doubleArrows = false,
  firstButton = <>&laquo;</>,
  previousButton = <>&lsaquo;</>,
  nextButton = <>&rsaquo;</>,
  lastButton = <>&raquo;</>,
  align = 'start',
  dots = false,
}) => {
  const pages: number[] = [];

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleFirstPage = () => {
    if (currentPage > 1) {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage < totalPages) {
      onPageChange(totalPages);
    }
  };

  const startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(totalPages, currentPage + 3);

  for (let i: number = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className='pagination-container'>
      <div className='page-count'>
        Page {currentPage} of {totalPages}
      </div>
      <ul className={`pagination ${className} justify-content-${align}`}>
        {doubleArrows && (
          <li
            className={`page-item arrows ${
              currentPage === 1 ? 'disabled' : ''
            }`}
          >
            <button
              type='button'
              className='page-link'
              onClick={handleFirstPage}
            >
              {firstButton}
            </button>
          </li>
        )}
        <li
          className={`page-item arrows ${currentPage === 1 ? 'disabled' : ''}`}
        >
          <button
            type='button'
            className='page-link'
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {previousButton}
          </button>
        </li>
        {dots && startPage > 1 && <li className='page-item'>...</li>}
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? 'active' : ''}`}
          >
            <button
              type='button'
              className='page-link'
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          </li>
        ))}
        {dots && endPage < totalPages && <li className='page-item'>...</li>}
        <li
          className={`page-item arrows ${
            currentPage === totalPages ? 'disabled' : ''
          }`}
        >
          <button
            type='button'
            className='page-link'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {nextButton}
          </button>
        </li>
        {doubleArrows && (
          <li
            className={`page-item arrows ${
              currentPage === totalPages ? 'disabled' : ''
            }`}
          >
            <button
              type='button'
              className='page-link'
              onClick={handleLastPage}
              disabled={currentPage === totalPages}
            >
              {lastButton}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
