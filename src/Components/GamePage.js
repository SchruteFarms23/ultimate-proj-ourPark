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
     threeOne: "0",
     pointsTwo: "0",
     rebsTwo: "0",
     astsTwo: "0",
     stlsTwo: "0",
     blksTwo: "0",
     threeTwo: "0",
     pointsThree: "0",
     rebsThree: "0",
     astsThree: "0",
     stlsThree: "0",
     blksThree: "0",
     threeThree: "0",

   }
   componentDidMount(){
     const gameId = this.props.location.pathname.split('/').pop()
     console.log("hi from gamepage mouting", gameId)
     this.props.fetchCurrentGame(gameId)
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



  render(){
    console.log(this.state.inputvalue)

    console.log("hi from gamePage", this.props)

    if(Object.keys(this.props.currentGame).length){
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
        <Table.Cell><input value={this.state.threeOne} id={usersTeamOne[0].id} type="number" onChange={this.handleThreeOne}/></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[1].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.rebsTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.astsTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.stlsTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.blksTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.threeTwo} id={usersTeamOne[1].id} type="number" /></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{usersTeamOne[2].name}</Table.Cell>
        <Table.Cell><input value={this.state.pointsThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.rebsThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.astsThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.stlsThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.blksThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
        <Table.Cell><input value={this.state.threeThree} id={usersTeamOne[2].id} type="number" /></Table.Cell>
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
