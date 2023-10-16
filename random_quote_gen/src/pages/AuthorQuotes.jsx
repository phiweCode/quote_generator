import React, { useState, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import axios from 'axios'


export const loader = async ({params}) =>
{
  const authorDetails = await axios.get(`https://api.quotable.io/authors/slug/${params.slug}`)
  const imgUrl = `https://images.quotable.dev/profile/200/${params.slug}.jpg`
  const authorQuotes = await axios.get(`https://api.quotable.io/quotes?author=${authorDetails.data.name}`)
  console.log("These are the author details", authorQuotes.data.results)
  const authorQuotesList = authorQuotes.data.results
  return [authorDetails.data, imgUrl, authorQuotesList]
}


function AuthorQuotes() {



  const authorDetails = useLoaderData()[0]
  const authorImg = useLoaderData()[1]
  const quotesList = useLoaderData()[2]

  console.log("useParams data", authorDetails)
  return (
    <section className='author-section'>

      <div className='author-bio'>
          <div className='author-div'>
            <img src={authorImg} />
          </div>

          <div className='author-details'>
            <h2> {authorDetails.name} </h2>
            <p>
            {authorDetails.bio}
            </p>
            <h3>{authorDetails.description} </h3>

            <span> Returned results {authorDetails.quoteCount}</span>
          </div>

      </div>

        <div className='author-quotes'>

        <ul>

        </ul>
            <p> {quotesList.map(quote=> <li> {quote.content} </li>)}</p>
        </div>
      </section>
  )
}

export default AuthorQuotes;
