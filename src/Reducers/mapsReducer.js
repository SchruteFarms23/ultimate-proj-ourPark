export default function mapsReducer(state={currentPark:{}} ,action){
  switch (action.type){
    case "ADD_CURRENT_PARK":
      return Object.assign({},state,{currentPark:action.payload})
    case "ADD_PLAYER_TO_CURRENT_PARK":
      return {
        ...state,
        currentPark: {
          ...state.currentPark,
          users: [...state.currentPark.users, action.payload]
        }
      }
    case "REMOVE_PLAYER_FROM_PARK":
    const newusers = state.currentPark.users.filter(user => user.id !== action.payload)
      return {
        ...state,
        currentPark:{
          ...state.currentPark,
          users: newusers

        }
      }

    default:
      return state
  }
}
