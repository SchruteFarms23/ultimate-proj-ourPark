import React from 'react';
import Navbar from './Navbar';
import { Line } from 'react-chartjs-2'

export default class PlayerPage extends React.Component{
  state = {
    player:{}
  }
  componentDidMount(){
    const playerId = this.props.location.pathname.split('/').pop()
    const url = "http://localhost:3000/users/"
    console.log(url + playerId)
    fetch(url + playerId)
    .then((res) => res.json())
		.then((player) => {
			console.log(player)
      this.setState({
        player: player
      })

		})
  }

  // mapLabels = () => {
  //   if (Object.keys(this.state.player).length >0) {
  //
  //   const labels = []
  //   for (let i = 0; i < this.state.player.stats.length; i++) {
  //     labels.push(`Game ${i}`)
  //   }
  //
  //   return labels
  //   }
  // }
  render(){
var chartData = {
labels: ["Game 1", "Game 2", "Game 3", "Game 4"],
datasets: [
            {
            label: "Points",
            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].points: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].points: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].points: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].points: null) : null) :null}`],
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "pink"
            },
            {
                label: "Rebounds",
            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].rebounds: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].rebounds: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].rebounds: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].rebounds: null) : null) :null}`],
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "green"
            },
            {
                label: "Assists",
                            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].assists: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].assists: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].assists: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].assists: null) : null) :null}`],
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "blue"
            },
            {
                label: "Steal",
            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].steals: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].steals: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].steals: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].steals: null) : null) :null}`],
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "red"
            },
            {
                label: "Blocks",
                            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].blocks: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].blocks: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].blocks: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].blocks: null) : null) :null}`],
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "black"
            },
            {
                label: "3PM",
            data: [`${this.state.player ? (this.state.player.stats ? (this.state.player.stats[0] ? this.state.player.stats[0].threes: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[1] ? this.state.player.stats[1].threes: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[2] ? this.state.player.stats[2].threes: null) : null) :null}`, `${this.state.player ? (this.state.player.stats ? (this.state.player.stats[3] ? this.state.player.stats[3].threes: null) : null) :null}`],
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "purple"
            }
           ]
}
var chartOptions = {
    bezierCurve : false,
    datasetFill : false,
    pointDotStrokeWidth: 4,
    scaleShowVerticalLines: false,
    responsive: true
};

var styles = {
    "graphContainer" : {
        "backgroundColor" : '#fff',
        "borderColor" : "green",
        "height" : "235px",
        "width" : "1150px",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};
    return(
      <div>
      <Navbar />
      <div className="ui internally celled grid">
  <div className="row">
    <div className="three wide column">
      <img src={this.state.player.image_url}/>
    </div>
    <div className="ten wide column">
      <h1>{this.state.player.name}</h1>
      <p></p>
    </div>
    <div className="three wide column">
      <img/>
    </div>
  </div>
  <div className="row">
    <div className="three wide column">
      <img/>
    </div>
    <div className="ten wide column">
    <div style={styles.graphContainer}>
    {this.state.player.stats ? <Line data={chartData} options={chartOptions} width={1700} height={500} /> : null}
    </div>
      <p></p>
    </div>
    <div className="three wide column">
      <img/>
    </div>
  </div>
</div>

</div>
    )
  }
}





// <h1>{this.state.player.name}</h1>
