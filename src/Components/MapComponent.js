import React from 'react'
import ReactDOM from 'react-dom'
import { addPark } from '../Actions/user'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MarkerModal from './MarkerModal'


class MapComponent extends React.Component {

  state = {
    currentLocation: {
      lat: 49.8527,
      lng: -123.1207
    },
    modalOpen: false,
    currentPark: {}
  }

  openModal = (park)=> {
    console.log(park)
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentPark: park
    })
  }



  getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                        currentLocation: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    }
                );
            })
        } else {
            this.setState({
                    currentLocation: {
                        lat: 49.8527,
                        lng: -123.1207
                    }
                }
            );
        }
    }

  componentDidMount() {
      this.getLocation()

    }

    recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }

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
    this.props.history.push('/parks/' + parkId)
  } else if(Object.keys(this.props.user).length !== 0 && this.props.user.park_id !== null){
    alert ("You are already checked in to a park.")
  } else if(Object.keys(this.props.user).length === 0){
    console.log("hitting")
    this.props.history.push('/login')
  }
    //Do a fetch here that assigns a user to a park
    //Then redirect to Park Page
  }

  doCheckOut = (parkId) =>{
    if(this.props.user && this.props.user.park_id !== null){
      const params = {
        user_id: this.props.user_id,
        park_id: parkId
      }
      this.props.checkOut(params)

    }
  }



  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps)
    // console.log(prevState)
    if (prevProps.google !== this.props.google || prevProps.parks !== this.props.parks || prevProps.user.park_id !== this.props.user.park_id) {
      console.log("is working")
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {

      console.log("also working")
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 18;
      let lng = this.state.currentLocation.lng;
      let lat = this.state.currentLocation.lat;
      // var geoloccontrol = new klokantech.GeolocationControl(mapRef, mapMaxZoom);
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);

      console.log("this.props.parks inside of mapComponent", console.log(this.props.parks))
//map start
      this.props.parks.map( (park) => {
      const marker = new google.maps.Marker({
          position: {lat: park.lat , lng: park.long },
          map: this.map,
          title: park.name
        });
        let users
        if ( park.users){
           users = park.users.map(user => `<li>${user.name}</li>`).join('')

        }else{
          users = "No one is in the park."
        }
        // console.log(this.doCheckIn)

        const checkin = `<button id = "checkin">Check In!</button>`
        const checkout = `<button id = "checkout">Check Out!</button>`

        let that = this


        marker.addListener('click', function() {
          /// we need it to open the specific marker and show the things associated with it
          ///
          // infowindow.open(this.map, marker);
          that.openModal(park)
        });
      })
      //end mapping

    }
  }



  render() {
    const style = {
      width: '85vw',
      height: '81vh'
    }
    console.log(this.state.currentPark.users)
    return (
      <div>
      <div ref='map' style={style}>
        Loading map...
      </div>
      <MarkerModal park={this.state.currentPark} visible={this.state.modalOpen}/>
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



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapComponent));














//     google.maps.event.addListener(infowindow, 'domready', function() {
// document.getElementById("checkin").addEventListener("click", function(){
//   console.log(park.id)
//   that.doCheckIn(park.id);
//
//
// });
// });
//     google.maps.event.addListener(infowindow, 'domready', function() {
// document.getElementById("checkout").addEventListener("click", function(){
//   console.log(park.id)
//   that.doCheckOut(park.id);


// });
// });
