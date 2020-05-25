import React from 'react'
import Layout from '../components/layout'

function profile() {
  return (
    <Layout>
      <h1>Profile</h1>
      <hr />
      <div classNameName="row">
        <div classNameName="col-12">
          <p>Your student number is: <kbd>1xxxxxxxxx</kbd></p>
          <p>Something not quite right? Speak to your school.</p>
          <form>
            <fieldset disabled>
              <div className="form-row">
                <div className="form-group col">
                  <label for="firstNameInput">First Name</label>
                  <input type="text" className="form-control" id="firstNameInput" placeholder="John" />
                </div>
                <div className="form-group col">
                  <label for="middleNameInput">Middle Name</label>
                  <input type="text" className="form-control" id="middleNameInput" placeholder="" />
                </div>
                <div className="form-group col">
                  <label for="lastNameInput">Last Name</label>
                  <input type="text" className="form-control" id="lastNameInput" placeholder="Doe" />
                </div>
              </div>
            </fieldset>

            <div classnName="form-row">
              <div class="form-group">
                <label for="emailInput">Email address</label>
                <input type="email" class="form-control" id="emailInput" placeholder="name@example.com" />
              </div>
              <div class="form-group">
                <label for="mobileNumberInput">Mobile Number</label>
                <input type="text" class="form-control" id="mobileNumberInput" placeholder="04xxxxxxxx" />
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputSuburb">Suburb</label>
                <input type="text" className="form-control" id="inputSuburb" placeholder="Melbourne" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                  <option selected>VIC</option>
                  <option>NSW</option>
                  <option>ACT</option>
                  <option>TAS</option>
                  <option>QLD</option>
                  <option>SA</option>
                  <option>WA</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputPostcode">Postcode</label>
                <input type="text" className="form-control" id="inputPostcode" placeholder="3030" />
              </div>
            </div>

            <button type="submit" className="btn btn-block btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default profile