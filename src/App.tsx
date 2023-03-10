import React, { useState } from 'react';
import './App.css';

import Pagination from './components/pagination/Pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='App'>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        TypeScript React Pagination
      </a>
      <div className='paginationWrap'>
        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={handlePageChange}
          align='end'
          pageCount
        />
      </div>
    </div>
  );
}

export default App;
