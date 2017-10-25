export default function gameReducer(state={currentGame:{}} ,action){
  switch(action.type){
    case "CURRENT_GAME":
      return Object.assign({}, state,{...state, currentGame:action.payload})
    default:
      return state
  }
}
