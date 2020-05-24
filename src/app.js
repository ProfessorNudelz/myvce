import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import MyDashboard from './pages/myDashboard'
import MyStudies from './pages/myStudies'
import MyResults from './pages/myResults'
import MyExams from './pages/myExams'
import FourZeroFourErrPage from './pages/errorPages/404'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyDashboard />
        </Route>
        <Route path="/mydashboard">
          <Redirect to="/" />
        </Route>
        <Route path="/mystudies">
          <MyStudies />
        </Route>
        <Route path="/myresults">
          <MyResults />
        </Route>
        <Route path="/myexams">
          <MyExams />
        </Route>
        <Route path="*">
          <FourZeroFourErrPage />
        </Route>
      </Switch>
    </Router>
  )
}
