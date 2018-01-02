import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Clarion from './clarion.jpg'
import './animate.css'
import './animated.css'
import 'semantic-ui-css/semantic.min.css'

// observables
import Layout from './observables/Layout'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'

import Pattern from './assets/pattern.png'

const container = {
  display: 'flex',
  justifyContent: 'center',
  // width: window.innerWidth,
  // height: window.innerHeight,
  //border: '1px solid red',
}
const content = {
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // height: window.innerHeight,
  // width: window.innerWidth
}
const logo = {
  borderRadius: 200,
  //border: '2px solid gray'
  marginTop: 10,
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
}
const bg = {
  background: `url(${Pattern})`,
  height: window.innerHeight
}
// const footer ={
//   position: 'absolute',
//   bottom: 0,
//   height: '100%'
// }

const layout = new Layout()


const Main = observer (
  class App extends Component {
    componentDidMount(){
      window.addEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
    }
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        layout.resizedWidth(window.innerWidth)
      })
    }
    render() {
      return (
        <div style={bg}>
        <div style={container}>
          
          <div style={layout.nh} className='animated slideInLeft'>
          New Hope
          </div>
          <div >
            <img 
              src={Clarion} 
              width={layout.logoSize} 
              height={layout.logoSize} 
              style={logo}
              className='animated fadeInUp'
              alt=''/>
          </div>
            <div style={layout.lv} className='animated slideInRight'>
              Lambertville
            </div>
          </div>
          <div style={content}>
           <Nav />
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      );
    }
  }
)
export default Main