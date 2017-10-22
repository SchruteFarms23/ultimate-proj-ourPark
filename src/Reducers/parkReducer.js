export default function parkReducer(state={activeGames:[],pendingGames:[]},action){
  switch(action.type){
    case "ACTIVE_GAMES":
      return Object.assign({},state,{...state, activeGames:action.payload})
    default:
      return state
  }
}
