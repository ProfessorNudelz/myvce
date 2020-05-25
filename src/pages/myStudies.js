import React from 'react'
import Layout from '../components/layout'

function myStudies() {
  return (
    <Layout>
      <h1>myStudies</h1>
      <hr />
      <h3>Completed</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Year</th>
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
            <th scope="row">2018</th>
            <td>Computing</td>
            <td>1/2</td>
            <td>S/S</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>Business Management</td>
            <td>1/2</td>
            <td>S/S</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>English</td>
            <td>1/2</td>
            <td>S/S</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>Mathematics: General Mathematics</td>
            <td>1/2</td>
            <td>S/S</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>Mathematics: Mathematical Methods</td>
            <td>1/2</td>
            <td>S/S</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>Computing: Informatics</td>
            <td>3/4</td>
            <td>S/S</td>
            <td>C</td>
            <td>C</td>
            <td>C</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>

      <h3>Undertaking</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Year</th>
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
            <th scope="row">2020</th>
            <td>Business Management</td>
            <td>3/4</td>
            <td>/</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td>English</td>
            <td>3/4</td>
            <td>/</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td>Mathematics: Further Mathematics</td>
            <td>3/4</td>
            <td>/</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td>Mathematics: Mathematical Methods</td>
            <td>3/4</td>
            <td>/</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td>Computing: Software Development</td>
            <td>3/4</td>
            <td>/</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default myStudies