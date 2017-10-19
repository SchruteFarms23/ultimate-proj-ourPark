

export function addUser(user){
  return {
    type: "ADD_PLAYER_TO_CURRENT_PARK",
    payload: user

  }
}

export function removeUser(user){
  console.log(user)
  return {
    type: "REMOVE_PLAYER_FROM_PARK",
    payload: user
  }
}


export function addCurrentPark(park){
  return {
    type:"ADD_CURRENT_PARK",
    payload: park
  }
}
