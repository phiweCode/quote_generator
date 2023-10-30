import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useGetAuthorDetailsQuery} from '../features/api/apiSlice'

export const loader = async ({params}) =>
{
  const imgUrl = `https://images.quotable.dev/profile/200/${params.slug}.jpg`
  return imgUrl
}

function AuthorQuotes()
  {
    const slug = useParams().slug
    //Getting Author details by slug
    const {
    data: authorDetailsData,
    error: authorDetailsErr,
    isError: isAuthorDetailsErr,
    isLoading: isAuthorDetailsLoading,
    isSuccess: isAuthorDetailsSuccess,
    isUnitialized: isAuthorDetailsUnitialized,
    } = useGetAuthorDetailsQuery(slug)

    const displayAuthorDetailsResponse = () => console.log("Get author details response",
    authorDetailsData,"authorDetailsData \n",
    authorDetailsErr, "authorDetailsErr \n",
    isAuthorDetailsErr, "isAuthorDetailsErr \n",
    isAuthorDetailsLoading, "isAuthorDetailsIsLoading \n",
    isAuthorDetailsSuccess, "isAuthorDetailsSuccess \n",
    isAuthorDetailsUnitialized, "isAuthorDetailsUnitialized \n",
    )

    if(isAuthorDetailsLoading)
    {
      return <p>Loading....</p>
    }

    const authorDetails = authorDetailsData;
    const authorImg = useLoaderData();
    const quotesList = authorDetailsData.quotes;

    displayAuthorDetailsResponse()

    return (
        <section className='author-section outlet container'>
          <div className='author-bio row mb-3'>
              <div className='author-div col-lg-3'>
                <img src={authorImg} className='img-fluid' />
              </div>

              <div className='author-details col-lg-8 '>
                <span className='fs-2 fw-bold text-primary text-uppercase '> {authorDetails.name} </span>
                <p className='fs-6 author-p '>{authorDetails.bio}</p>
                <p className="fs-5 fw-bold text-dark">{authorDetails.description} </p>
              </div>
          </div>

          <p className="fs-4 "> Returned results <span className='btn btn-primary fs-6'>{authorDetails.quoteCount}</span></p>

          <div className='author-quotes row mw-5'>
            <ol>
              <p> {quotesList.map(quote=> <li className="mb-2 ml-9"> {quote.content} </li>)}</p>
            </ol>
          </div>
        </section>)
  }

export default AuthorQuotes;
