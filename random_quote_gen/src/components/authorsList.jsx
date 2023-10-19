import React, { useLayoutEffect } from 'react'
import { useGetAuthorsQuery, useGetTagsQuery } from '../features/api/apiSlice'
import { useLoaderData } from 'react-router-dom'

let authors = {}
let category = {}

export const loader = () =>
{
   return [authors, category]
}

function AuthorsList() {

   authors = useGetAuthorsQuery().data
   category = useGetTagsQuery().data

   let test = useLoaderData()[0]

  console.log("Authors from component", authors.results)


  return (
    <div>
     {authors.results.map((data)=> {
      return(
        <li>{data.name}</li>
      )
    })}
    </div>
  )
}

export default AuthorsList
