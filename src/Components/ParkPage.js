import React from 'react'
import MapWindowModal from './MapWindowModal'


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
      <p>{this.state.park.name}</p>
      <MapWindowModal />
      </div>



    )
  }

}
