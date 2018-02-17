import React, { Component } from 'react'
import { Segment, Image } from 'semantic-ui-react'

const Header = (props) => {

  const logo = require('../img/blacktop.png')

  const headerstyle = {
    backgroundColor: 'black',
    backgroundSize: 'cover',
    height: '119px'
  }

  return(
    <div className="header" style={headerstyle} >
      <div className="container">
        <Image src={logo} size='small' centered />
      </div>
    </div>

  )
}

export default Header;
