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
        })
    });

    export const { useGetAuthorsQuery, useGetTagsQuery } = apiSlice