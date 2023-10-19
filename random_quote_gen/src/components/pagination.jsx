import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Badge from "react-bootstrap/Badge";


// Example items, to simulate fetching from another resources.
export function Items({ currentItems }) {
  return (
    <Fragment>
      <div className="items">{currentItems && currentItems.map((item) =>(<div>{item.name}</div>))}</div>
    </Fragment>
  );
}

//Pagination component
export default function CategoryPagination({ itemsPerPage, items, handleCurrentItems }) {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    handleCurrentItems(currentItems);
    setItemOffset(newOffset);

  };

  return (
    <Fragment>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </Fragment>);

}