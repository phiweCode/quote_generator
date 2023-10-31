import './App.css'
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

//layouts
import RootLayout from './Layouts/RootLayout';
import Sidebar from './Layouts/Sidebar';

//pages
import Landing from './pages/landing'
import AuthorQuotes from './pages/AuthorQuotes'


//actions
import { loader as sidebarLoader } from './Layouts/Sidebar'
import { loader as authorLoader }  from './pages/AuthorQuotes'
import QuoteTags from './pages/QuotesByTag'
import SearchResults, {loader as searchQuotesLoader} from './pages/SearchResults';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route path='/' loader={sidebarLoader} element={<Sidebar />}>
        <Route index element={<Landing />} />
        <Route path="authorquotes/:slug" loader={authorLoader} element={<AuthorQuotes />} />
        <Route path='quotestags/:tags'  element={<QuoteTags />} />
        <Route path='search' loader={searchQuotesLoader} element={<SearchResults />} />
      </Route>
    </Route>))

function App()
{
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
