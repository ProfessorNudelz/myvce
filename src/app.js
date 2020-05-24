import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './pages/home'
import MyStudies from './pages/myStudies'
import MyResults from './pages/myResults'
import MyExams from './pages/myExams'
import FourZeroFourErrPage from './pages/errorPages/404'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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
