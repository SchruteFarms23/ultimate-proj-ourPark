export default function userReducer(state = { fetchingAccount:false, loggedIn: false, user_id: "", user: {}}, action){
  switch(action.type){
    case "FETCHING_ACCOUNT":
      return Object.assign({},state,{fetchingAccount: true})
    case "SET_USER":
      return Object.assign({},state,{user:action.payload, user_id:action.payload.id, loggedIn: true}) //might have to change the logged in to be its seperate action.
    case "LOGGED_OUT":
      return Object.assign({},state,{fetchingAccount:false, loggedIn: false, user_id: "", user: {}})
    default:
      return state

  }
}
