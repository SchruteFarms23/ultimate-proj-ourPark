export default function parkReducer(state={activeGames:[],pendingGames:[]},action){
  switch(action.type){
    case "ACTIVE_GAMES":
      return Object.assign({},state,{...state, activeGames:action.payload})
    case "PENDING_GAMES":
      return Object.assign({},state,{...state, pendingGames:action.payload})
    case "ADD_NEW_GAME":
      return Object.assign({},state,{pendingGames: [...state.pendingGames,action.payload]})
    case "ADD_USER_TO_TEAM":
    console.log("hitting it", action.payload)
      var gameIdx = state.pendingGames.findIndex(game => game.id === action.payload.gameId) //grab the game index
      //we know index of game
      // we know index of team
      //we need to slice in the new game object
      // we need to spread in new users to team object
      var game = state.pendingGames[gameIdx] //game obj
      var teamIdx = game.teams.findIndex(team => team.id === action.payload.teamId) //grab the team idx nested inside that game
      var team = game.teams[teamIdx] //team obj

      var newTeam = Object.assign({}, team, {users: [...team.users, action.payload.user]}) //new Team object that will be added to pendingGames, then to state with NEW USER
      var newGame = Object.assign({}, game, {teams: [...game.teams.slice(0, teamIdx), newTeam, ...game.teams.slice(teamIdx + 1)]}) //new game object where target team is replaced by the newly created team obj

      //we have newGame object, just need to drop it into state

      return Object.assign({}, state, {pendingGames: [...state.pendingGames.slice(0, gameIdx), newGame, ...state.pendingGames.slice(gameIdx + 1)]}) //new state object where the target game object inside of state.pendingGames is replaced to reflect the newly added user

    default:
      return state
  }
}
