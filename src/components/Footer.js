import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Layout from '../observables/Layout'
import { Grid, Header, Button } from 'semantic-ui-react'

const container = {
  // width: window.innerWidth,
  // alignItems: 'center',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: '#100',
  height: 50,
  textAlign: 'center',
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
    paddingTop: 25,
    color: '#c4dff6',
    diplay: 'inline'
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
  },
  social: {
    border: 'none'
  }
}

const observe = new Layout()

const footer = observer (
  class Footer extends Component {
    componentDidMount(){
      window.addEventListener('resize', ()=> {
        observe.resizedWidth(window.innerWidth)
      })
    }
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        observe.resizedWidth(window.innerWidth)
      })
    }
    checkWidth(width){
      if (width < 650){
        return(
          <Grid style={grid} stretched>
          <Grid.Column width={16} style={grid.center}>
            <Header as='h2'>
              <Header.Content>
                <a href='tel:2158625221' style={grid.phone}> &nbsp; 215-862-5221</a>
              </Header.Content>
            </Header>
          </Grid.Column>
          </Grid>
        )
      }else if(width > 500){
        return(
          <Grid style={grid} stretched>
          <Grid.Column width={4} style={grid.left}>
          <Button.Group compact size='small'>
            <Button icon='facebook' color='facebook'/>
            <Button icon='instagram' color='instagram'/>
            <Button icon='twitter' color='twitter'/>
          </Button.Group>
          </Grid.Column>

          <Grid.Column width={8} style={grid.center}>
            <Header as='h5'>
              <Header.Content>
                <p style={grid.centerText}>6426 Lower York Rd New Hope, PA 18938> <a href='tel:2158625221' style={grid.phone}> &nbsp; 215-862-5221</a></p>
              </Header.Content>
            </Header>
          </Grid.Column>

          <Grid.Column width={4} style={grid.right}>
            <Header as='h5' content='Terms of Use' style={grid.rightText}/>
          </Grid.Column>
          </Grid>
        )
      }
    }
    render(){
      return(
        <div style={container}>

          {this.checkWidth(observe.width)}

        </div>
      )
    }
  }
)
export default footer


