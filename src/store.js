import { createStore } from 'redux';
import commentReducer from './reducer/comment.js'



let store = createStore(commentReducer)
export default store
