import React from 'react'
import ReactDOM from 'react-dom'
import MapInfoWindow from './MapInfoWindow'
import { addPark } from '../Actions/user'
import { connect } from 'react-redux'


class MapComponent extends React.Component {

  doCheckIn = (parkId) =>{
    console.log(Object.keys(this.props.user).length === 0 )
    if(this.props.user && this.props.user.park_id === null){
    console.log(parkId,"tried to check in")
    console.log(this.props.user)
    console.log(this.props.user_id)
    const params = {
      user_id: this.props.user_id,
      park_id: parkId
    }
    this.props.addPark(params)
  } else if(Object.keys(this.props.user).length !== 0 && this.props.user.park_id !== null){
    alert ("You are already checked in to a park.")
  } else if(Object.keys(this.props.user).length === 0){
    console.log("hitting")
    this.props.history.push('/login')
  }
    //Do a fetch here that assigns a user to a park
    //Then redirect to Park Page
  }



  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    if (prevProps.google !== this.props.google || prevProps.parks !== this.props.parks) {
      console.log("is working")
      this.loadMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      console.log("also working")
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lng = -73.9712;
      let lat = 40.7831;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

      this.props.parks.map( (park) => {
      const marker = new google.maps.Marker({
          position: {lat: park.lat , lng: park.long },
          map: this.map,
          title: park.name
        });
        if (park.users.length > 0){
          var users = park.users.map(user => `<li>${user.name}</li>`).join('')

        }else{
          users = "No one is in the park."
        }
        // console.log(this.doCheckIn)

        const checkin = `<button id = "checkin">Check In!</button>`

        var content = `<div id="iw-container">` +
                   `<div class="iw-title">${park.name}</div>` +
                   `<div class="iw-content">` +
                     `<img src="https://i.pinimg.com/736x/85/ee/0d/85ee0d3d32c5a4c46748a2f5c12a01b1--basketball-clipart-girls-basketball.jpg"  height="115" width="100">` +
                     users +
                     checkin +
                 `</div>`
                 ;
      var infowindow = new google.maps.InfoWindow({
          content: content
        });

        let that = this

        google.maps.event.addListener(infowindow, 'domready', function() {
    document.getElementById("checkin").addEventListener("click", function(){
      console.log(park.id)
      that.doCheckIn(park.id);


    });
    });

        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
      })
    }
  }



  render() {
    const style = {
      width: '85vw',
      height: '75vh'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user.user,
    user_id: state.user.user_id
  }
}

function mapDispatchToProps(dispatch){
  return{
    addPark: (user) => {
      dispatch(addPark(user))
  }
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
