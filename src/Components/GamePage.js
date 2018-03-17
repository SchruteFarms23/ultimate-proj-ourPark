import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { fetchCurrentGame } from '../Actions/game'
import {  Divider } from 'semantic-ui-react'
import {  Table } from 'semantic-ui-react'

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
     const parkId = this.props.currentGame.park_id

     fetch("http://localhost:3000/stats/update",{
       method: 'post',
       body: body,
       headers: {
         "Accept":"application/json",
         "Content-Type":"application/json"
     }
     })
     .then(res => res.json())
     .then(res => this.props.history.push('/parks/' + parkId))
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
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
        <Table.Cell ><input value={this.state.pointsOne}  id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="pointsOne" /></Table.Cell>
        <Table.Cell><input value={this.state.rebsOne}     id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="rebsOne"/></Table.Cell>
        <Table.Cell><input value={this.state.astsOne}     id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="astsOne"/></Table.Cell>
        <Table.Cell><input value={this.state.stlsOne}     id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="stlsOne"/></Table.Cell>
        <Table.Cell><input value={this.state.blksOne}     id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="blksOne"/></Table.Cell>
        <Table.Cell><input value={this.state.threesOne}   id={usersTeamOne[0].id}    type="number" onChange={this.handleChange} name="threesOne"/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[1].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsTwo} id={usersTeamOne[1].id} type="number"   onChange={this.handleChange} name="pointsTwo" /></Table.Cell>
        <Table.Cell><input value={this.state.rebsTwo} id={usersTeamOne[1].id}   type="number"   onChange={this.handleChange} name="rebsTwo" /></Table.Cell>
        <Table.Cell><input value={this.state.astsTwo} id={usersTeamOne[1].id}   type="number"   onChange={this.handleChange} name="astsTwo" /></Table.Cell>
        <Table.Cell><input value={this.state.stlsTwo} id={usersTeamOne[1].id}   type="number"   onChange={this.handleChange} name="stlsTwo"/></Table.Cell>
        <Table.Cell><input value={this.state.blksTwo} id={usersTeamOne[1].id}   type="number"   onChange={this.handleChange} name="blksTwo"/></Table.Cell>
        <Table.Cell><input value={this.state.threesTwo} id={usersTeamOne[1].id} type="number"   onChange={this.handleChange} name="threesTwo"/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[2].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsThree} id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="pointsThree" /></Table.Cell>
        <Table.Cell><input value={this.state.rebsThree}   id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="rebsThree"/></Table.Cell>
        <Table.Cell><input value={this.state.astsThree}   id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="astsThree"/></Table.Cell>
        <Table.Cell><input value={this.state.stlsThree}   id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="stlsThree"/></Table.Cell>
        <Table.Cell><input value={this.state.blksThree}   id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="blksThree"/></Table.Cell>
        <Table.Cell><input value={this.state.threesThree} id={usersTeamOne[2].id}   type="number"   onChange={this.handleChange} name="threesThree"/></Table.Cell>
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
    <Table.Cell ><input value={this.state.pointsOneSec} id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="pointsOneSec" /></Table.Cell>
    <Table.Cell><input value={this.state.rebsOneSec}    id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="rebsOneSec"/></Table.Cell>
    <Table.Cell><input value={this.state.astsOneSec}    id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="astsOneSec"/></Table.Cell>
    <Table.Cell><input value={this.state.stlsOneSec}    id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="stlsOneSec"/></Table.Cell>
    <Table.Cell><input value={this.state.blksOneSec}    id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="blksOneSec"/></Table.Cell>
    <Table.Cell><input value={this.state.threesOneSec}  id={usersTeamTwo[0].id} type="number" onChange={this.handleChange} name="threesOneSec"/></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{usersTeamTwo[1].name}</Table.Cell>
    <Table.Cell><input value={this.state.pointsTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="pointsTwoSec"/></Table.Cell>
    <Table.Cell><input value={this.state.rebsTwoSec}   id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="rebsTwoSec"/></Table.Cell>
    <Table.Cell><input value={this.state.astsTwoSec}   id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="astsTwoSec"/></Table.Cell>
    <Table.Cell><input value={this.state.stlsTwoSec}   id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="stlsTwoSec"/></Table.Cell>
    <Table.Cell><input value={this.state.blksTwoSec}   id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="blksTwoSec"/></Table.Cell>
    <Table.Cell><input value={this.state.threesTwoSec} id={usersTeamTwo[1].id} type="number" onChange={this.handleChange}  name="threesTwoSec"/></Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>{usersTeamTwo[2].name}</Table.Cell>
    <Table.Cell><input value={this.state.pointsThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="pointsThreeSec"/></Table.Cell>
    <Table.Cell><input value={this.state.rebsThreeSec}   id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="rebsThreeSec"/></Table.Cell>
    <Table.Cell><input value={this.state.astsThreeSec}   id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="astsThreeSec"/></Table.Cell>
    <Table.Cell><input value={this.state.stlsThreeSec}   id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="stlsThreeSec"/></Table.Cell>
    <Table.Cell><input value={this.state.blksThreeSec}   id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="blksThreeSec"/></Table.Cell>
    <Table.Cell><input value={this.state.threesThreeSec} id={usersTeamTwo[2].id} type="number" onChange={this.handleChange} name="threesThreeSec"/></Table.Cell>
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
