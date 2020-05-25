import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout'

function myResults() {
  return (
    <Layout>  
      <h1>myResults - Study Scores</h1>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Study</th>
            <th scope="col">Unit</th>
            <th scope="col">Result</th>
            <th scope="col">GA1</th>
            <th scope="col">GA2</th>
            <th scope="col">GA3</th>
            <th scope="col">Study Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">English</th>
            <td>3/4</td>
            <td>S/S</td>
            <td>C+</td>
            <td>B</td>
            <td>B</td>
            <td>30</td>
          </tr>
          <tr>
            <th scope="row">English</th>
            <td>3/4</td>
            <td>S/S</td>
            <td>C+</td>
            <td>B</td>
            <td>B</td>
            <td>30</td>
          </tr>
          <tr>
            <th scope="row">English</th>
            <td>3/4</td>
            <td>S/S</td>
            <td>C+</td>
            <td>B</td>
            <td>B</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
      <Link to="/myresultsatar">
        <button type="button" class="btn btn-primary btn-block right-align">View ATAR <i class="fas fa-chevron-right"></i></button>
      </Link>
    </Layout>
  )
}

export default myResults