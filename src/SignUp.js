import React from 'react'
import  {Link} from 'react-router-dom'

class Loginname extends React.Component{
  render(){
    return(
      <div>
        <form className='form'>
          <input type='text' placeholder='用户名'/>
          <div className='underline'></div>
          <input type='text' placeholder='e-mail'/>
          <div className='underline'></div>
          <input type='password' placeholder='密码'/>
          <div className='underline'></div>
          <input type='text' placeholder='再次输入密码'/>
          <div className='underline'></div>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default Loginname
