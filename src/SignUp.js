import React from 'react'
import axios from 'axios'
import store from './redux/store.js'

class Loginname extends React.Component{
  style = {
    'width':'300px',
    'margin':'20px auto'
  }
  signUp = (e) =>{
    e.preventDefault()
    let username = this.userNameInput.value
    let password = this.passwordInput.value
    // console.log({username,password})
    let data = {username,password}
    axios.post('http://192.168.0.122:3008/user/signup',data)
      .then(res =>{
        if(res.data.username){
          console.log(res.data)
          store.dispatch({type:'AUTH_USER',username:res.data.username})
          localStorage.setItem('userId',res.data.userId)
          this.signupForm.reset()
        }
      })
      .catch(err =>{
        console.log(err.response.data.msg)
      })
  }
  render(){
    return(
      <div style={this.style}>
        <h1>注册</h1>
        <form className='form' onSubmit={this.signUp} ref={value=>{
          this.signupForm = value
        }}>
          <div>
            <input ref = {value=>this.userNameInput = value} type='text' placeholder='用户名'/>
          </div>
          <div>
            <input type='password' placeholder='密码' ref={value=>this.passwordInput = value}/>
          </div>
          <div>
            <input type='password' placeholder='再次输入密码' />
          </div>
          <div>
            <button>提交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Loginname
