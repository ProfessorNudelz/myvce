import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import MyDashboard from './pages/myDashboard'
import MyStudies from './pages/myStudies'
import MyResultsSS from './pages/myResultsSS'
import MyResultsATAR from './pages/myResultsATAR'
import MyExams from './pages/myExams'
import Profile from './pages/profile'
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
          <MyResultsSS />
        </Route>
        <Route path="/myresultsatar">
          <MyResultsATAR />
        </Route>
        <Route path="/myexams">
          <MyExams />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        {/* For github pages */}
        <Route path="/myvce">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <FourZeroFourErrPage />
        </Route>
      </Switch>
    </Router>
  )
}
