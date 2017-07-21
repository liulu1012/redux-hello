import React from 'react'
import './main.css'
import HomePage from './HomePage'
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <div>
            <Route path='/' exact component={HomePage}/>
            <Route path='/signup' component={SignUp}/>
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
