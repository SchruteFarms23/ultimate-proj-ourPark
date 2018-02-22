import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchCurrentPark } from '../Actions/park'
import MarkerModal from './MarkerModal'
import {  Loader } from 'semantic-ui-react'


class MapComponent extends React.Component {

  state = {
    currentLocation: {
      lat: 49.8527,
      lng: -123.1207
    },
    modalOpen: false
  }

  openModal = (park)=> {
    console.log(park.id)
    this.props.fetchCurrentPark(park.id)

    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  close = () =>{
    this.setState({
      modalOpen: !this.state.modalOpen
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




  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.parks !== this.props.parks || prevProps.user.park_id !== this.props.user.park_id) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
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

        const checkin = `<button id = "checkin">Check In!</button>`
        const checkout = `<button id = "checkout">Check Out!</button>`

        let that = this


        marker.addListener('click', function() {
          that.openModal(park)
        });
      })

    }
  }



  render() {
    const style = {
      width: '85vw',
      height: '97vh'
    }

    return (
      <div>
      <MarkerModal visible={this.state.modalOpen} close={this.close}/>
      <div ref='map' style={style}>
        <Loader active inline='centered' size='massive' />
      </div>

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
    fetchCurrentPark: (park) => {
      dispatch(fetchCurrentPark(park))
  }
 }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapComponent));
