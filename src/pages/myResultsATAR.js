import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'

function myResults() {
  return (
    <Layout>
      <h1>myResults - ATAR</h1>
      <hr />

      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card text-center">
            <div className="card-header">
              ATAR
            </div>
            <div className="card-body">
              <h1 className="card-title" id="atar">XX.XX</h1>
            </div>
          </div>
        </div>
      </div>
      <Link to="/myresults">
        <button type="button" class="btn btn-primary btn-block right-align"><i class="fas fa-chevron-left"></i> View Study Scores</button>
      </Link>
    </Layout>
  )
}

export default myResults