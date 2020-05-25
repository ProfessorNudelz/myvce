/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/">
        <a className="navbar-brand">myVCE</a>
      </NavLink>        

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* With the bootstrap component, having a link to / always highlights it in the nav */}
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
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              John Doe
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/profile">
                <button className="dropdown-item" type="button"><i className="fas fa-user"></i> Profile</button>
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/logout">
                <button className="dropdown-item" type="button"><i className="fas fa-sign-out-alt"></i> Logout</button>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default navbar
