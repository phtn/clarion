import React from 'react'
import { Icon, Grid, Header } from 'semantic-ui-react'

const container = {
  width: window.innerWidth,
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  // backgroundColor: '#efefef',
  height: 50,
  textAlign: 'center'
}
const icon = {
  marginRight: 15
}
const grid = {
  center: {
    textAlign: 'center'
  },
  left: {
    textAlign: 'left',
    paddingLeft: 45
  },
  right: {
    textAlign: 'right',
    paddingRight: 45
  }
}
const gridCenter = {
  textAlign: 'center',
  // border: '1px solid red'
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
            6426 Lower York Rd New Hope, PA 18938 | 
            <a href='tel:2158625221'> &nbsp; 215-862-5221</a>
          </Header.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={4} style={grid.right}>
        <Header as='h5' content='Terms of Use'/>
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