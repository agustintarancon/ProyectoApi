import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount,setUrlApi}) => {
    const newUrlApi="https://www.episodate.com/api/most-popular?page=";

    const handleClick= (event)=>{
        setUrlApi(`${newUrlApi}${event.selected+1}`);
    };
    
  return (
    <>
        <ReactPaginate
          className='pagination'
          breakLinkClassName='page-link'
          pageLinkClassName='page-link'
          nextLinkClassName='page-link'
          previousLinkClassName='page-link'
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handleClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
    </>
  );
};

export default Pagination;