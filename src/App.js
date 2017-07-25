import React from 'react'
import './main.css'
import HomePage from './HomePage'
import SignUp from './SignUp'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import axios from 'axios'


class App extends React.Component{
  componentDidMount(){
    let userId = localStorage.getItem('userId')
    console.log('userId',userId)
    axios.get(`http://192.168.0.122:3008/user/${userId}`)
      .then(res => {
        console.log(res.data.user.username)
        store.dispatch({type:'AUTH_USER',username:res.data.user.username})
      })
  }
  render(){
    return(
      <Provider store = {store}>
        <div>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/signup' component={SignUp}/>
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
