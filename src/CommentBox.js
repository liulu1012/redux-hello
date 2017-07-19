import React from 'react'
import store from './store.js'


class CommentBox extends React.Component{
  state={
    comments:store.getState()
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    let newComment = this.comment.value.trim()
    // console.log(store.getState())
    if(newComment){
      store.dispatch({type:'ADD_COMMENT',comment:newComment})
    }
    this.setState({
      comments:store.getState()
    })
    // console.log(store.getState())
    this.commentForm.reset()
  }
  render(){
    console.log(this.state.comments)
    return(
      <div className='comment-box'>
        {
          this.state.comments.map(item=>(
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
