import React from 'react'
import { Form, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <header id='main-header'>
          <div id='logo-section'>
              <h1>LOGO</h1>
          </div>
          <div id='search-bar-section'>
              <Form method='post'>
                  <input type='text' name='search' placeholder='Enter search here' />
                  <button type='submit'>search</button>
              </Form>
          </div>
      </header>
      <main id='main-section'>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
