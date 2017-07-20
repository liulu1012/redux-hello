import LikeReducer from './like'
import commentReducer from './comment'

import {combinReducers} from 'redux'

const rootReducer = combinReducers({
  comments:commentReducer,
  like:LikeReducer
})


export default rootReducer
