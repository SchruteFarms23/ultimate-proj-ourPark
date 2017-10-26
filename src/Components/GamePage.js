import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { fetchCurrentGame } from '../Actions/game'
import { Segment, Button, Divider } from 'semantic-ui-react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

 class GamePage extends React.Component{

   state={
     pointsOne: "0",
     rebsOne: "0",
     astsOne: "0",
     stlsOne: "0",
     blksOne: "0",
     threesOne: "0",
     pointsTwo: "0",
     rebsTwo: "0",
     astsTwo: "0",
     stlsTwo: "0",
     blksTwo: "0",
     threesTwo: "0",
     pointsThree: "0",
     rebsThree: "0",
     astsThree: "0",
     stlsThree: "0",
     blksThree: "0",
     threesThree: "0",
     pointsOneSec: "0",
     rebsOneSec: "0",
     astsOneSec: "0",
     stlsOneSec: "0",
     blksOneSec: "0",
     threesOneSec: "0",
     pointsTwoSec: "0",
     rebsTwoSec: "0",
     astsTwoSec: "0",
     stlsTwoSec: "0",
     blksTwoSec: "0",
     threesTwoSec: "0",
     pointsThreeSec: "0",
     rebsThreeSec: "0",
     astsThreeSec: "0",
     stlsThreeSec: "0",
     blksThreeSec: "0",
     threesThreeSec: "0"


   }
   componentDidMount(){
     const gameId = this.props.location.pathname.split('/').pop()
     console.log("hi from gamepage mouting", gameId)
     this.props.fetchCurrentGame(gameId)
   }

   submitStats = () => {
     console.log()
     console.log(this.state)
     const scoreTeamOne = parseInt(this.state.pointsOne) + parseInt(this.state.pointsTwo) + parseInt(this.state.pointsThree)
     const scoreTeamTwo = parseInt(this.state.pointsOneSec) + parseInt(this.state.pointsTwoSec) + parseInt(this.state.pointsThreeSec)
     const params = {...this.state, scoreTeamOne:scoreTeamOne, scoreTeamTwo: scoreTeamTwo, game_id:this.props.currentGame.id}
     console.log(params)
     const body = JSON.stringify(params)
     fetch("http://localhost:3000/stats/update",{
       method: 'post',
       body: body,
       headers: {
         "Accept":"application/json",
         "Content-Type":"application/json"
     }
     })
     .then(res => res.json())
   }

   handlePointsOne = (event) => {
     this.setState({
       pointsOne: event.target.value
     })
   }
   handleRebsOne = (event) => {
     this.setState({
       rebsOne: event.target.value
     })
   }
   handleAstsOne = (event) => {
     this.setState({
       astsOne: event.target.value
     })
   }
   handleStlsOne = (event) => {
     this.setState({
       stlsOne: event.target.value
     })
   }
   handleBlksOne = (event) => {
     this.setState({
       blksOne: event.target.value
     })
   }
   handleThreesOne = (event) => {
     this.setState({
       threesOne: event.target.value
     })
   }
   handlePointsTwo = (event) => {
     this.setState({
       pointsTwo: event.target.value
     })
   }
   handleRebsTwo = (event) => {
     this.setState({
       rebsTwo: event.target.value
     })
   }
   handleAstsTwo = (event) => {
     this.setState({
       astsTwo: event.target.value
     })
   }
   handleStlsTwo = (event) => {
     this.setState({
       stlsTwo: event.target.value
     })
   }
   handleBlksTwo = (event) => {
     this.setState({
       blksTwo: event.target.value
     })
   }
   handleThreesTwo = (event) => {
     this.setState({
       threesTwo: event.target.value
     })
   }
   handlePointsThree = (event) => {
     this.setState({
       pointsThree: event.target.value
     })
   }
   handleRebsThree = (event) => {
     this.setState({
       rebsThree: event.target.value
     })
   }
   handleAstsThree = (event) => {
     this.setState({
       astsThree: event.target.value
     })
   }
   handleStlsThree = (event) => {
     this.setState({
       stlsThree: event.target.value
     })
   }
   handleBlksThree = (event) => {
     this.setState({
       blksThree: event.target.value
     })
   }
   handleThreesThree = (event) => {
     this.setState({
       threesThree: event.target.value
     })
   }
   handlePointsOneSec = (event) => {
     this.setState({
       pointsOneSec: event.target.value
     })
   }
   handleRebsOneSec = (event) => {
     this.setState({
       rebsOneSec: event.target.value
     })
   }
   handleAstsOneSec = (event) => {
     this.setState({
       astsOneSec: event.target.value
     })
   }
   handleStlsOneSec = (event) => {
     this.setState({
       stlsOneSec: event.target.value
     })
   }
   handleBlksOneSec = (event) => {
     this.setState({
       blksOneSec: event.target.value
     })
   }
   handleThreesOneSec = (event) => {
     this.setState({
       threesOneSec: event.target.value
     })
   }
   handlePointsTwoSec = (event) => {
     this.setState({
       pointsTwoSec: event.target.value
     })
   }
   handleRebsTwoSec = (event) => {
     this.setState({
       rebsTwoSec: event.target.value
     })
   }
   handleAstsTwoSec = (event) => {
     this.setState({
       astsTwoSec: event.target.value
     })
   }
   handleStlsTwoSec = (event) => {
     this.setState({
       stlsTwoSec: event.target.value
     })
   }
   handleBlksTwoSec = (event) => {
     this.setState({
       blksTwoSec: event.target.value
     })
   }
   handleThreesTwoSec = (event) => {
     this.setState({
       threesTwoSec: event.target.value
     })
   }
   handlePointsThreeSec = (event) => {
     this.setState({
       pointsThreeSec: event.target.value
     })
   }
   handleRebsThreeSec = (event) => {
     this.setState({
       rebsThreeSec: event.target.value
     })
   }
   handleAstsThreeSec = (event) => {
     this.setState({
       astsThreeSec: event.target.value
     })
   }
   handleStlsThreeSec = (event) => {
     this.setState({
       stlsThreeSec: event.target.value
     })
   }
   handleBlksThreeSec = (event) => {
     this.setState({
       blksThreeSec: event.target.value
     })
   }
   handleThreesThreeSec = (event) => {
     this.setState({
       threesThreeSec: event.target.value
     })
   }

   teamOneScore = (event) => {
     console.log(event)
     this.setState({
       teamOneScore:event.target.value
     })
   }

   teamTwoScore = (event) => {
     console.log(event)
     this.setState({
       teamTwoScore:event.target.value
     })
   }















  render(){
    if(Object.keys(this.props.currentGame).length){
      const scoreTeamOne = parseInt(this.state.pointsOne) + parseInt(this.state.pointsTwo) + parseInt(this.state.pointsThree)
      const scoreTeamTwo = parseInt(this.state.pointsOneSec) + parseInt(this.state.pointsTwoSec) + parseInt(this.state.pointsThreeSec)
      const usersTeamOne = this.props.currentGame.teams[0].users
      const usersTeamTwo = this.props.currentGame.teams[1].users
    return(
      <div>
      <Navbar />
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Points</Table.HeaderCell>
        <Table.HeaderCell>Rebounds</Table.HeaderCell>
        <Table.HeaderCell>Assists</Table.HeaderCell>
        <Table.HeaderCell>Steals</Table.HeaderCell>
        <Table.HeaderCell>Blocks</Table.HeaderCell>
        <Table.HeaderCell>3PM</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          {usersTeamOne[0].name}
        </Table.Cell>
        <Table.Cell ><input value={this.state.pointsOne} id={usersTeamOne[0].id} type="number" onChange={this.handlePointsOne} /></Table.Cell>
        <Table.Cell><input value={this.state.rebsOne} id={usersTeamOne[0].id} type="number" onChange={this.handleRebsOne}/></Table.Cell>
        <Table.Cell><input value={this.state.astsOne} id={usersTeamOne[0].id} type="number" onChange={this.handleAstsOne}/></Table.Cell>
        <Table.Cell><input value={this.state.stlsOne} id={usersTeamOne[0].id} type="number" onChange={this.handleStlsOne}/></Table.Cell>
        <Table.Cell><input value={this.state.blksOne} id={usersTeamOne[0].id} type="number" onChange={this.handleBlksOne}/></Table.Cell>
        <Table.Cell><input value={this.state.threesOne} id={usersTeamOne[0].id} type="number" onChange={this.handleThreesOne}/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[1].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsTwo} id={usersTeamOne[1].id} type="number" onChange={this.handlePointsTwo} /></Table.Cell>
        <Table.Cell><input value={this.state.rebsTwo} id={usersTeamOne[1].id} type="number" onChange={this.handleRebsTwo}/></Table.Cell>
        <Table.Cell><input value={this.state.astsTwo} id={usersTeamOne[1].id} type="number" onChange={this.handleAstsTwo}/></Table.Cell>
        <Table.Cell><input value={this.state.stlsTwo} id={usersTeamOne[1].id} type="number" onChange={this.handleStlsTwo}/></Table.Cell>
        <Table.Cell><input value={this.state.blksTwo} id={usersTeamOne[1].id} type="number" onChange={this.handleBlksTwo}/></Table.Cell>
        <Table.Cell><input value={this.state.threesTwo} id={usersTeamOne[1].id} type="number" onChange={this.handleThreesTwo}/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[2].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsThree} id={usersTeamOne[2].id} type="number" onChange={this.handlePointsThree}/></Table.Cell>
        <Table.Cell><input value={this.state.rebsThree} id={usersTeamOne[2].id} type="number" onChange={this.handleRebsThree}/></Table.Cell>
        <Table.Cell><input value={this.state.astsThree} id={usersTeamOne[2].id} type="number" onChange={this.handleAstsThree}/></Table.Cell>
        <Table.Cell><input value={this.state.stlsThree} id={usersTeamOne[2].id} type="number" onChange={this.handleStlsThree}/></Table.Cell>
        <Table.Cell><input value={this.state.blksThree} id={usersTeamOne[2].id} type="number" onChange={this.handleBlksThree}/></Table.Cell>
        <Table.Cell><input value={this.state.threesThree} id={usersTeamOne[2].id} type="number" onChange={this.handleThreesThree}/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> Team One Total: {scoreTeamOne}</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='7'>

        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  <Divider horizontal> The Blacktop </Divider>
  <Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Points</Table.HeaderCell>
    <Table.HeaderCell>Rebounds</Table.HeaderCell>
    <Table.HeaderCell>Assists</Table.HeaderCell>
    <Table.HeaderCell>Steals</Table.HeaderCell>
    <Table.HeaderCell>Blocks</Table.HeaderCell>
    <Table.HeaderCell>3PM</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  <Table.Row>
    <Table.Cell>
      {usersTeamTwo[0].name}
    </Table.Cell>
    <Table.Cell ><input value={this.state.pointsOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handlePointsOneSec} /></Table.Cell>
    <Table.Cell><input value={this.state.rebsOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleRebsOneSec}/></Table.Cell>
    <Table.Cell><input value={this.state.astsOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleAstsOneSec}/></Table.Cell>
    <Table.Cell><input value={this.state.stlsOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleStlsOneSec}/></Table.Cell>
    <Table.Cell><input value={this.state.blksOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleBlksOneSec}/></Table.Cell>
    <Table.Cell><input value={this.state.threesOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleThreesOneSec}/></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{usersTeamTwo[1].name}</Table.Cell>
    <Table.Cell><input value={this.state.pointsTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handlePointsTwoSec} /></Table.Cell>
    <Table.Cell><input value={this.state.rebsTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleRebsTwoSec}/></Table.Cell>
    <Table.Cell><input value={this.state.astsTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleAstsTwoSec}/></Table.Cell>
    <Table.Cell><input value={this.state.stlsTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleStlsTwoSec}/></Table.Cell>
    <Table.Cell><input value={this.state.blksTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleBlksTwoSec}/></Table.Cell>
    <Table.Cell><input value={this.state.threesTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleThreesTwoSec}/></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{usersTeamTwo[2].name}</Table.Cell>
    <Table.Cell><input value={this.state.pointsThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handlePointsThreeSec}/></Table.Cell>
    <Table.Cell><input value={this.state.rebsThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleRebsThreeSec}/></Table.Cell>
    <Table.Cell><input value={this.state.astsThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleAstsThreeSec}/></Table.Cell>
    <Table.Cell><input value={this.state.stlsThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleStlsThreeSec}/></Table.Cell>
    <Table.Cell><input value={this.state.blksThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleBlksThreeSec}/></Table.Cell>
    <Table.Cell><input value={this.state.threesThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleThreesThreeSec}/></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell> Team Two Total: {scoreTeamTwo}</Table.Cell>
  </Table.Row>
</Table.Body>

<Table.Footer>
  <Table.Row>
    <Table.HeaderCell colSpan='7'>

    </Table.HeaderCell>
  </Table.Row>
</Table.Footer>
</Table>
<div className="ui container center aligned">
 <button className="ui blue button" onClick={this.submitStats}>Submit Stats</button>
 </div>
  </div>
    )
  }else{
    return(
    null
  )
  }

  }




}

  function mapStateToProps(state){

    return {
      user: state.user.user,
      user_id: state.user.user_id,
      currentPark: state.maps.currentPark,
      currentGame: state.game.currentGame
    }
  }

  function mapDispatchToProps(dispatch) {

    return {
      fetchCurrentGame: (game) => {
        dispatch(fetchCurrentGame(game))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);




// <div>
// <Navbar />
// <input type="number" />
// <Divider horizontal> The Blacktop </Divider>
// <input type="number" />
// <p>{this.props.currentGame.id}</p>
// </div>
