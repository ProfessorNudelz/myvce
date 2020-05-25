import React from 'react'
import Layout from '../components/layout'

function myExams() {
  return (
    <Layout>
      <h1>myExams</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Study/Exam</th>
            <th scope="col">Type</th>
            <th scope="col">Start</th>
            <th scope="col">End</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">09/09/2020</th>
            <td>General Achievement Test (GAT)</td>
            <td>Written</td>
            <td>10:00</td>
            <td>13:15</td>
            <td>Point Cook Senior Secondary College</td>
          </tr>
        </tbody>
      </table>
      <p>Please refer back on a later date to see the rest of your exam dates.</p>
    </Layout>
  )
}

export default myExams