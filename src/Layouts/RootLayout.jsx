import React from 'react'
import { Form, Outlet } from 'react-router-dom'
import NavbarComponent from '../components/navCmp'

function RootLayout() {
  return (

      <div className='row root'>
      <NavbarComponent />
        <main id='main-section col-lg-12'>
            <Outlet />
        </main>
      </div>
  )
}

export default RootLayout
