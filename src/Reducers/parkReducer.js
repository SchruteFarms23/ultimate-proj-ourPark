export default function parkReducer(state={activeGames:[],pendingGames:[]},action){
  switch(action.type){
    case "ACTIVE_GAMES":
      return Object.assign({},state,{...state, activeGames:action.payload})
    case "PENDING_GAMES":
      return Object.assign({},state,{...state, pendingGames:action.payload})
    case "CURRENT_TEAM":
      return Object.assign({},state,{...state, currentTeam:action.payload})
    default:
      return state
  }
}
