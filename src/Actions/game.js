export function currentGame(game){
  return {
    type: "CURRENT_GAME",
    payload: game
  }
}



export function fetchCurrentGame(id){
  return function(dispatch){
    const url= "http://localhost:3000/games/"
    return fetch(url + id)
    .then(res => res.json())
    .then(game => dispatch(currentGame(game)))

}
}
