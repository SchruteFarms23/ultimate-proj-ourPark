
export function fetchingAccount(){
  return {
    type: "FETCHING_ACCOUNT"
  }
}

export function setUser(user){
  console.log(user)
  return {
    type:"SET_USER",
    payload: user
  }

}
export function checkedOut(user){
  console.log(user)
  return {
    type:"CHECKED_OUT",
    payload: user
  }

}

export function logOut(){
  return {
    type: "LOGGED_OUT"
  }
}

export function setCurrentUser(){
  return function(dispatch){
    const token = localStorage.getItem("jwtToken")
    return fetch("http://localhost:3000/getuser",{
      method: 'get',
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(user => dispatch(setUser(user)))
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

export function logIn(params,props){
  console.log("Inside of logIn action", props)
  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/login",{
      method: 'post',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
    })
    .then((res) => {
      // console.log(res)
      return res.json()
    })
      .then((user) => {
        if(user.user){
          localStorage.setItem("jwtToken", user.jwt)
          dispatch(setUser(user.user))
          console.log("hi", user);
          props.history.push(`/players/${user.user.id}`)
        }else{
          props.history.push('/')
          alert("bad user password")
          // return null
        }
      })
    //   .then((res) => {
    //     console.log(res)
    //     if(res !== null){
    //      props.history.push('/me')
    //    }else{
    //      props.history.push('/')
    //    }
    //  })
    }
  }

export function addPark(params){
  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/users/add",{
      method: 'PATCH',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
  })
  .then((res) =>{
    return res.json()})
  .then((user) => {
    dispatch(setUser(user.user))
  })
  }
}

export function checkOut(params){
  return function(dispatch){
    const body= JSON.stringify(params)
    return fetch("http://localhost:3000/users/delete",{
      method: 'DELETE',
       body: body,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
    }
  })
  .then((res) =>{
    return res.json()})
  .then((user) => {
    console.log(user)
    dispatch(setUser(user.user))
  })
  }
}
