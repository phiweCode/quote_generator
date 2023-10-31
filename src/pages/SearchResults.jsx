import React, { useState, useEffect, Fragment } from 'react'
import { useSearchQuotesQuery } from '../features/api/searchApi';
import { useLoaderData } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

//paginated list
export function Items({ currentItems }) {
  return (
    <Fragment>
      <figure className="items me-4 ">
        {currentItems && currentItems.map((item) =>(

            <div className='mb-2 shadow p-3 mb-5 bg-body rounded'>
            <blockquote className='blockquote'>
                <p>{item.content} </p>
            </blockquote>
            <figcaption className='blockquote-footer text-primary'>
              <span> {item.author}</span>
            </figcaption>
            </div>

        ))}
      </figure>
    </Fragment>
  );
}

//Pagination component
export function SearchPagination({ itemsPerPage, items}) {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={18}
        marginPagesDisplayed={2}
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

export const loader = async ({ request }) =>
{
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("search");
  return searchTerm;
}

//The search results
function SearchResults() {
  const [currentData, setCurrentData ] = useState([])

  const searchTerm = useLoaderData()
  console.log("search term:",searchTerm)
  const result = useSearchQuotesQuery(searchTerm);
  console.log("Returned search results", result)

  const { data ,error, isError, isFetching, isLoading, isSuccess, isUninitialized, originalArgs } = result

  if(isError)
  {
    return <div>{error.message}</div>
  }

  if(isUninitialized && isLoading)
  {
    return <div> Loading... </div>
  }


  useEffect(()=>{
    if(isSuccess && !isUninitialized)
    {
      setCurrentData(data.results)
    }
  },[currentData, isSuccess, isLoading, isFetching])

  console.log("This is the current data: ", data, currentData)
  return (
    <section className='outlet search-section'>
        <h3>Returned results for "{searchTerm}"</h3>
        <h6>Quote count: {data?.totalCount} </h6>
        <SearchPagination itemsPerPage={5} items={currentData} />
    </section>
  )
}

export default SearchResults;
