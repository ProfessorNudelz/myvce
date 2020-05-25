import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'

function myDashboard() {
  return (
    <Layout>
      <div className="alert alert-warning" role="alert">
        <h2 className="alert-heading"><i class="fas fa-exclamation-triangle"></i> COVID-19 Update</h2>
        <hr />
        <h6>29/05/2020</h6>
        <p>Exams dates have been annouced. Please refer <a href="https://vcaa.vic.edu.au/administration/Key-dates/Pages/VCE-exam-timetable.aspx" className="alert-link">here.</a></p>
        <hr />
        <h6>10/05/2002</h6>
        <p>Changes to the study designs for 2020 have been made. Please refer <a href="https://vcaa.vic.edu.au/curriculum/vce/vce-study-designs/Pages/vce-study-designs.aspx" className="alert-link">here</a> to view changes.</p>
      </div>
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