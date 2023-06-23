import React from 'react'
import Nav from '../nav/Nav'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import Footer from '../Footer'

const Layout = () => {
  return (
    
        <Provider store={store}>
            <div className='align'>
              <Nav />
              <Outlet />
              <Footer />
            </div>
        </Provider>
    
  )
}

export default Layout