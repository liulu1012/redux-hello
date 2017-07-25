let account = {
  isAuthenticated : false,
  currentUser:''
}

export default function accountReducer(state=account,action){
  switch(action.type){
    case 'AUTH_USER' :
      // console.log('action.user',action.username)
      return {isAuthenticated:true,currentUser:action.username}
    
    default:
      return state
  }
}
