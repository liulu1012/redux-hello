export default function LikeReducer(state=0,action){
  switch(action.type){
    case 'NUMBER'：
      return state+=1
    default:
      return state
  }
}
