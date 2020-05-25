import React from 'react'
import Layout from '../components/layout'

function myResults() {
  return (
    <Layout>
      <h1>myResults</h1>
      <hr />

      <div className="row">
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
        <div className="col-6">
          <div className="card text-center">
            <div className="card-header">
              Study Scores
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">English</li>
              <li class="list-group-item">Mathematics: Further Mathematics</li>
              <li class="list-group-item">Mathematics: Mathematical Methods</li>
              <li class="list-group-item">Computing: Software Development</li>
              <li class="list-group-item">Business Management</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default myResults