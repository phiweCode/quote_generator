import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLazyGetRandomQuoteQuery } from '../features/api/apiSlice'


function Landing() {

    const [getRandomQuote, result, lasPromiseInfo] = useLazyGetRandomQuoteQuery()
    const { data, error, isError, isSuccess, isLoading, isUnitialized } = result
    let response = {}
    let slug = ""

    useEffect(()=>{getRandomQuote()}, [])

    if(isError)
    {
        return <div>{error}</div>
    }

    if(isSuccess && data)
    {
        response = data
        slug = data.authorSlug
    }

    console.log("Lazy random quote response: ", data, error, isError, isSuccess, isLoading, isUnitialized )

    return (

        <section id='quote-box' className='outlet '>
            <div className='shadow-lg mb-5 bg-dark rounded quote-box'>
                <div className='text-author text-center text-white'>
                    <div className='author-IMG '>
                   <img src={`https://images.quotable.dev/profile/200/${slug}.jpg`}   className='img-fluid text-center rounded-2' />
                    </div>
                    <blockquote id='text' className='blockquote'>" {response.content} "</blockquote>
                    <figcaption className='blockquote-footer' >
                    <span id='author' className='text-primary'> {response.author}</span>
                    </figcaption>
                </div>

                <div className='landing-icons'>
                <button className='btn'  type='button' id='new-quote' onClick={() => getRandomQuote()}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg> </button>

                <button className='btn' type='button' id='tweet-quote'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg></button>
                </div>
            </div>
        </section>
    )
}

export default Landing;
