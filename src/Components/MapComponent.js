import React from 'react'
import ReactDOM from 'react-dom'


export default class MapComponent extends React.Component {



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
        var content = '<div id="iw-container">' +
                   '<div class="iw-title">${park.name}</div>' +
                   '<div class="iw-content">' +
                     '<div class="iw-subTitle">History</div>' +
                     '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                     '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                     '<div class="iw-subTitle">Contacts</div>' +
                     '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>'+
                     '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>'+
                   '</div>' +
                   '<div class="iw-bottom-gradient"></div>' +
                 '</div>';
      var infowindow = new google.maps.InfoWindow({
          content: park.name
        });
        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
      })
    }
  }



  render() {
    const style = {
      width: '100vw',
      height: '75vh'
    }

    return (
      <div ref='map' style={style}>
        Loading map...
      </div>
    )
  }
}
