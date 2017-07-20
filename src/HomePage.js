import React from 'react'
import {Link } from 'react-router-dom'


class HomePage extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to='/post/1'>Git 技巧</Link></li>
          <li><Link to='/post/2'>Git</Link></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default HomePage
