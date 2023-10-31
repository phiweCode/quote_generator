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
                query: (author)=> `/quotes?author=${author}`,
                //transformResponse: (response, meta, arg) => response.results.data,
            }),
            getQuoteByTag: builder.query({
                query: (tag)=> `/quotes?tags=${tag}`
            }),
            getRandomQuote: builder.query({
                query: (slug) => `/random`,
            })
            })
    });

    export const {
                    useGetAuthorsQuery,
                    useGetTagsQuery,
                    useGetAuthorDetailsQuery,
                    useGetAuthorQuotesQuery,
                    useGetQuoteByTagQuery,
                    useLazyGetRandomQuoteQuery,
                 } = apiSlice;
