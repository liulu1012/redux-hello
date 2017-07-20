import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import store from './store.js'
import {Provider} from 'react-redux'


class PostPage extends React.Component{
  render(){
    console.log(this.props)
    let  {id} = this.props.match.params
    return(
      <Provider store={store}>
        <div>
          <div className='top clearfix'>
            <PostBody postId={id}/>
          </div>
          <div className='bottom clearfix'>
            <CommentBox />
          </div>
        </div>
      </Provider>
    )
  }
}

export default PostPage
