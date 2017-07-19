import React from 'react'
import store from './store.js'


class CommentBox extends React.Component{
  handleSubmit = (e)=>{
    e.preventDefault()
    let newComment = this.comment.value.trim()
    if(newComment)
    this.setState({comments:[...this.state.comments,newComment]})
    this.commentForm.reset()
  }
  render(){
    console.log(store.getState())
    return(
      <div className='comment-box'>
        {
          store.getState().map(item=>(
            <li key={Math.random()} className='comment'>{item}</li>
          ))
        }
        <form className='comment-form' onSubmit={this.handleSubmit} ref={value=>this.commentForm=value}>
          <input type='text' className='input' ref={value=>this.comment=value}/>
          <button type='submit' className='submit-btn'>提交</button>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox
