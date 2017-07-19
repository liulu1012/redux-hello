let comments = [
  '第一条评论',
  '第二条评论'
]

export default function commentReducer(state=comments,action){
  console.log(action)
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state,action.comment]
    default:
    return state
}
}
