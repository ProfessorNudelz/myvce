/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/">
          <a className="navbar-brand">myVCE</a>
        </NavLink>

        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/mydashboard" activeClassName="nav-item active">
              <a className="nav-link">myDashboard</a>
            </NavLink>
            <NavLink to="/mystudies" activeClassName="nav-item active">
              <a className="nav-link">myStudies</a>
            </NavLink>
            <NavLink to="/myresults" activeClassName="nav-item active">
              <a className="nav-link">myResults</a>
            </NavLink>
            <NavLink to="/myexams" activeClassName="nav-item active">
              <a className="nav-link">myExams</a>
            </NavLink>

            {/* <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/mystudies">myStudies</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/myresults">myResults</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/myexams">myExams</a>
            </li> */}
          </ul>
        </div>
      </nav>
  )
}

export default navbar
