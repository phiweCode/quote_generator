import { apiSlice } from "./apiSlice";

const searchApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        searchQuotes: build.query({
            query: (query)=> `/search/quotes?query="${query}"&fields="content,author,tags"&fuzzyMaxEdits=10`,

        })
    })
})

export const { useSearchQuotesQuery } = searchApi