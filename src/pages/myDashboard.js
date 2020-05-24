import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'

function myDashboard() {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-4">Hello, <samp>firstName</samp>!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
        <Link to="/mystudies">
          <button type="button" class="btn btn-primary">myStudies</button>
        </Link>
      </div>
    </Layout>
  )
}

export default myDashboard