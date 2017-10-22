

export function activeGames(games){
  console.log(games)
  return {
    type: "ACTIVE_GAMES",
    payload: games
  }
}



export function fetchActiveGames(params){
  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/games/active",{
      method: 'post',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then(res => res.json())
    .then(games => dispatch(activeGames(games)))
  }
}
