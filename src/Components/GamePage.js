import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux'

export default class GamePage extends React.Component{
  render(){
    return(
      <div>
      <Navbar />
      <p>Hi</p>
      </div>
    )
  }

}
