import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function layout(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default layout
