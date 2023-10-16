import React, { useState, useEffect } from 'react'
import { Outlet, NavLink, Link, useLoaderData } from 'react-router-dom'
import axios from 'axios'

export const loader = async () => {

    const authors = await axios.get('https://api.quotable.io/authors')
    const quotes = await axios.get('https://api.quotable.io/tags')
    const res = [authors, quotes]
    console.log("response object", res)
    return res

}

function Sidebar() {
    const authors = useLoaderData()[0].data
    const category = useLoaderData()[1].data

    console.log("authors", authors)
    console.log("category", category)

    return (
        <div>
            <section className='sidebar-section'>

                {/* Side bar */}
                <div id='sidebar' className=''>
                    <h2> Sidebar</h2>

                    <h3><NavLink to='/'> Random </NavLink></h3>

                    <h3> <NavLink to='/authorquotes'> AuthorQuotes </NavLink> </h3>
                    <ul>
                    {authors.results.map((res) => {
                        return (
                            <>
                            <Link to={"/authorquotes/"+res.slug}>
                             <li key={res._id}>{res.name} <span> {res.quoteCount}</span></li>
                             </Link>
                            </>)
                    })}
                    </ul>

                    <hr/>
                    <h3> <NavLink to='/quotesbycategory'> Quotes by category </NavLink> </h3>
                    <ul>
                    {category.map((res) => {
                        return (
                            <>
                            <li key={res._id}>{res.name}<span> {res.quoteCount}</span></li>
                            </>)
                    })}
                    </ul>
                </div>

                {/* main content */}
                <div id='main-content'>
                    <Outlet />
                </div>

            </section>
        </div>
    )
}

export default Sidebar
