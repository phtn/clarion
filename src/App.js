import React, { Component } from 'react'
import Clarion from './clarion.jpg'

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: window.innerWidth,
  height: window.innerHeight,
}
const logo = {
  borderRadius: 200,
  //border: '2px solid gray'
}
const nh = {
  //border:'1px solid red',
  marginRight: 50,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 24,
  color: 'gray'
}
const lv = {
  //border:'1px solid red',
  marginLeft: 50,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 24,
  color: 'gray'

}

class App extends Component {
  render() {
    return (
      <div style={container}>
        
        <div style={nh}>
        NEW HOPE
        </div>
        <div >
          <img src={Clarion} width={300} height={300} style={logo}/>
        </div>
        <div style={lv}>
        LAMBERTVILLE
        </div>
        
      </div>
    );
  }
}

export default App;
