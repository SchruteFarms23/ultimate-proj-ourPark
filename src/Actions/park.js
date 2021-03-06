import {addCurrentPark} from './map'

export function activeGames(games){
  console.log(games)
  return {
    type: "ACTIVE_GAMES",
    payload: games
  }
}

export function addNewGame(game){
  return {
    type: "ADD_NEW_GAME",
    payload:game
  }
}

export function pendingGames(games){
  console.log(games)
  return {
    type: "PENDING_GAMES",
    payload: games
  }
}

export function currentTeam(team){
  return {
    type: "CURRENT_TEAM",
    payload: team
  }
}

export function addUser(user,gameId,teamId){
  return {
    type: "ADD_USER_TO_TEAM",
    payload: {user,gameId,teamId}
  }
}

export function fetchCurrentPark(id){
  return function(dispatch){
    const url= "http://localhost:3000/parks/"
    return fetch(url + id)
    .then(res => res.json())
    .then(park => dispatch(addCurrentPark(park)))

}
}

export function fetchCurrentTeam(id){
  return function(dispatch){
    const url= "http://localhost:3000/teams/"
    return fetch(url + id)
    .then(res => res.json())
    .then(team => dispatch(currentTeam(team)))

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

export function fetchPendingGames(params){
  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/games/pending",{
      method: 'post',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then(res => res.json())
    .then(games => dispatch(pendingGames(games)))
  }
}

export function createGame(params){

  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/games/create",{
      method: 'post',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then(res => res.json())
    .then(game => dispatch(addNewGame(game)))
     //backend sends back new game obj; we update store which re-renders components
  }
}

export function addUserToTeam(params,gameId){
  return function(dispatch){
    const body= JSON.stringify(params)

    return fetch("http://localhost:3000/teams/adduser",{
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then(res => res.json())
    .then(user => {
      if(!user.messages){
      dispatch(addUser(user,gameId,params.team_id))
    }else{
      alert("User already belongs to a team")
    }
  })

  }
}

export function startGame(params,props){
  return function(dispatch){
    const body= JSON.stringify(params)

    return fetch("http://localhost:3000/games/change",{
      method: 'post',
      body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then(res => res.json())
    .then(res => props.history.push(`/games/${params.game_id}`))

  }
}
