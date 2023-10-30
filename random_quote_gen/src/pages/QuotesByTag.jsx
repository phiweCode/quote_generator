import React, {useState, Fragment} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useGetQuoteByTagQuery } from '../features/api/apiSlice'
import ReactPaginate from 'react-paginate';


// Example items, to simulate fetching from another resources.
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
export function CategoryPagination({ itemsPerPage, items}) {

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


function QuoteTags() {

  const tag = useParams()
  const quotesData = useGetQuoteByTagQuery(tag.tags)
  const { data: quotes, isError, isFetching, isLoading, isSuccess, isUnitialized } = quotesData

  if(isLoading)
  {
   return ( <div className="spinner-grow text-primary mn-5" role="status">
       <span className="visually-hidden">Loading...</span>
    </div>)
  }

  console.log("quotes data",quotes, tag.tags)

  return (
    <section className='outlet tag-section'>

      <h2 className='tag-heading'>{tag.tags}</h2>
      <h6>Quotes count: {quotes.totalCount} </h6>

      <div>
      <CategoryPagination itemsPerPage={5} items={quotes.results}/>
      </div>

    </section>
  )
}

export default QuoteTags;
