import { createApi, fetchBaseQuery } from  '@reduxjs/toolkit/query/react'

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://api.quotable.io',
        }),
        endpoints: (builder)=> ({
            getAuthors: builder.query({
                query: ()=> `/authors`,
            }),
            getTags: builder.query({
                query: ()=> '/tags',
            }),
            getAuthorDetails: builder.query({
                query: (slug)=> `/authors/slug/${slug}`
            }),
            getAuthorQuotes: builder.query({
                query: (author)=> `https://api.quotable.io/quotes?author=${author}`
            }),
            getQuoteByTag: (tag)=> `https://api.quotable.io/quotes?tags=${tag}`
            })
    });

    export const { useGetAuthorsQuery, useGetTagsQuery, useGetAuthorDetailsQuery, useGetAuthorQuotesQuerry } = apiSlice



    export const apiImgSplice = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://images.quotable.dev/profile/200/',
        }),
        endpoints: (builder)=>({
            getAuthorImg: builder.query({
                query: (slug)=>`/${size}/${slug}.jpg`
            })
        })
    })


    export const { useGetAuthorImg } = apiImgSplice