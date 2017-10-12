import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Clarion from './clarion.jpg'
import './animate.css'
import 'semantic-ui-css/semantic.min.css'

// observables
import Layout from './observables/Layout'

// components
import Nav from './components/Nav'

const container = {
  display: 'flex',
  //alignItems: 'center',
  justifyContent: 'center',
  width: window.innerWidth,
}
const content = {
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  height: window.innerHeight,
  width: window.innerWidth
}
const logo = {
  borderRadius: 200,
  //border: '2px solid gray'
  marginTop: 10,
}
const nh = {
  //border:'1px solid red',
  marginRight: 50,
  marginTop: 50,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 24,
  color: 'gray'
}
const lv = {
  //border:'1px solid red',
  marginLeft: 50,
  marginTop: 50,
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 24,
  color: 'gray'

}

const layout = new Layout()

const Main = observer (
  class App extends Component {
    componentDidMount(){
      layout.shrink()
    }
    render() {
      return (
        <div>
        <div style={container}>
          
          <div style={nh}>
          NEW HOPE
          </div>
          <div >
            <img 
              src={Clarion} 
              width={layout.logoSize} 
              height={layout.logoSize} 
              style={logo}
              className='animated fadeIn'
              alt=''/>
          </div>
            <div style={lv}>
              LAMBERTVILLE
            </div>
          </div>
          <div style={content}>
           <Nav />
          </div>
        </div>
      );
    }
  }
)
export default Main