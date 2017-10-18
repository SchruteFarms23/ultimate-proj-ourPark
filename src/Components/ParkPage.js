import React from 'react'



export default class ParkPage extends React.Component{
  state={
    park: {}
  }

  componentDidMount(){
    const parkId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/parks/"
    console.log(url + parkId)
    fetch(url+parkId)
    .then((res) => res.json())
		.then((park) => {
			console.log(park)
      this.setState({
        park: park.park
      })

		})
  }

  render(){
    return(
      <div>
      <h1>{this.state.park.name}</h1>
      </div>



    )
  }

}
