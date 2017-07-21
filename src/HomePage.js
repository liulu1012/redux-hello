import React from 'react'
import  { Link } from 'react-router-dom'

class HomePage extends React.Component{
  render(){
    return(
      <div>
        <Link to='/signup'>
          注册
        </Link>
      </div>
    )
  }
}

export default HomePage
