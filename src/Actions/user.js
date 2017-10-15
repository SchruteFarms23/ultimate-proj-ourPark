
export function fetchingAccount(){
  return {
    type: "FETCHING_ACCOUNT"
  }
}

export function setUser(user){
  return {
    type:"SET_USER",
    payload: user
  }

}




export function signUp(user,props){
  return function(dispatch){
    dispatch(fetchingAccount())

  const body= JSON.stringify(user)
  return fetch("http://localhost:3000/users",{
    method: 'post',
     body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
  }
  })
  .then((res) => {
    // console.log(res)
    return res.json()})
    .then((user) => {
      localStorage.setItem("jwtToken", user.jwt)
      dispatch(setUser(user.user))
    })
    .then((res) => props.history.push('/'))
  }
}

// export function logIn(){
//
// }
