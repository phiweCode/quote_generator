import React from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { useLoaderData } from 'react-router-dom'


export const loader = async ({params}) =>
{
   const quoteByTag = await axios.get(`https://api.quotable.io/quotes?tags=${params.tags}`)
   console.log("tags objetc", quoteByTag)
   return quoteByTag.data
}

function QuoteTags() {

  const quotes = useLoaderData()

  return (
    <Fragment>

      <h2>Quotes by Tags</h2>

     <div>

      <ul>
       {quotes.results.map((quote)=>{

        return(
        <li>
          <div>
              <p>{quote.content} </p>

          </div>
          <span> {quote.author}</span>
        </li>)
       })}
      </ul>
      </div>
    </Fragment>
  )
}

export default QuoteTags;
