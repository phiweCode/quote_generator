import './App.css'
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

//layouts
import RootLayout from './Layouts/RootLayout';
import Sidebar from './Layouts/Sidebar';

//pages
import Landing from './pages/landing'
import AuthorQuotes from './pages/AuthorQuotes'
import QuotesByCat from './pages/QuotesByCat'

//actions
import { loader as sidebarLoader } from './Layouts/Sidebar'
import { loader as authorLoader }  from './pages/AuthorQuotes'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>
      <Route path='/' loader={sidebarLoader} element={<Sidebar />}>
        <Route index element={<Landing />} />
        <Route path="authorquotes/:slug" loader={authorLoader} element={<AuthorQuotes />} />
        <Route path='quotesbycategory' element={<QuotesByCat />} />
      </Route>
    </Route>))

function App()
{
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
