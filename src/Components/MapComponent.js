import React from 'react'
import ReactDOM from 'react-dom'
import MapInfoWindow from './MapInfoWindow'
import { connect } from 'react-redux'


export default class MapComponent extends React.Component {

  doCheckIn = (parkId) =>{
    console.log(parkId,"tried to check in")
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
