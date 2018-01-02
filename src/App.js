import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Clarion from './clarion.jpg'
import './animate.css'
import './animated.css'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

// observables
import Layout from './observables/Layout'

// components
import Nav from './components/Nav'
import Footer from './components/Footer'

import Pattern from './assets/pattern.png'

const styles = {
  bg: {
    background: `url(${Pattern})`,
    height: window.innerHeight
  },
  container: {
    textAlign: 'center'
  },
  logo: {
    borderRadius: 200,
    marginTop: 10,
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
  },
  text: {
    marginTop: 30
  }
}



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
        <div style={styles.bg}>
          <Grid style={styles.container}>
          
          <Grid.Column width={7} className='animated slideInLeft'>
            <h1 style={layout.nh}>New Hope</h1>
          </Grid.Column>

          <Grid.Column width={2}>
            <img 
              src={Clarion} 
              width={layout.logoSize} 
              height={layout.logoSize} 
              style={styles.logo}
              className='animated fadeInUp'
              alt=''/>
          </Grid.Column>

          <Grid.Column width={7} className='animated slideInRight'>
          <h1 style={layout.lv}>Lambertville</h1>
          </Grid.Column>

          </Grid>
          <div>
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