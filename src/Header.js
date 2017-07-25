import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import store from './redux/store'


class Header extends React.Component{
  // conponentDidMount(){
  //   console.log(store.getState())
  // }
  logout = () => {
    store.dispatch({type:'LOG_OUT'})
    localStorage.removeItem('userId')
  }
  render(){
    console.log(this.props)
    let authStr = (
      <div>
        <Link to='/signup'>注册</Link>
        <Link to='/login'>登陆</Link>
      </div>
    )
    let userInfo = (
      <div style={{border:'2px solid red'}}>
        {this.props.currentUser} | <Link to='' onClick={this.logout}>退出</Link>
      </div>
    )
    return(
      <header>
        {this.props.isAuthenticated ? userInfo:authStr}
      </header>

    )
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated:state.account.isAuthenticated,
  currentUser:state.account.currentUser
})


export default connect(mapStateToProps)(Header)
