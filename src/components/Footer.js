import React from 'react'
import { Icon, Grid, Header } from 'semantic-ui-react'

const container = {
  width: window.innerWidth,
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  backgroundColor: '#100',
  height: 50,
  textAlign: 'center',


}
const icon = {
  marginRight: 15
}
const grid = {
  center: {
    textAlign: 'center',
    paddingTop: 30,
    color: 'tomato'
  },
  left: {
    textAlign: 'left',
    paddingLeft: 45,
    paddingTop: 30,
    color: '#c4dff6',
  },
  right: {
    textAlign: 'right',
    paddingRight: 45,
    paddingTop: 30,
    color: '#49c0b6',
  },
  centerText: {
    color: '#c4dff6',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    letterSpacing: 1
  },
  phone: {
    color: '#49c0b6',
    fontFamily: 'Roboto Mono, monospace'
  },
  rightText: {
    color: '#c4dff6',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '12px',
    marginTop: 5
  },
  leftText: {
    color: '#c4dff6',
  }
}

export default props => (
  <div style={container}>
    <Grid style={grid}>
      
    
      <Grid.Column width={4} style={grid.left}>
        <a href='https://www.facebook.com/clarion.newhope.1'><Icon name='facebook' style={icon} size='large' color='grey'/></a>
      <a href='https://www.instagram.com/clarionnewhope/'><Icon name='instagram' style={icon} size='large' color='grey'/></a>
      <Icon name='twitter' style={icon} size='large' color='grey'/>
      </Grid.Column>
      <Grid.Column width={8} style={grid.center}>
        <Header as='h5'>
          <Header.Content>
            <p style={grid.centerText}>6426 Lower York Rd New Hope, PA 18938  
            <a href='tel:2158625221' style={grid.phone}> &nbsp; 215-862-5221</a></p>
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={4} style={grid.right}>
        <Header as='h5' content='Terms of Use' style={grid.rightText}/>
      </Grid.Column>
    </Grid>
  </div>
)


// position: absolute;
// right: 0;
// bottom: 0;
// left: 0;
// padding: 1rem;
// background-color: #efefef;
// text-align: center;