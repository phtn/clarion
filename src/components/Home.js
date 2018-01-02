import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Grid } from 'semantic-ui-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotelSlider from './HotelSlider'
import SideBar from './SideBar'
import RightBar from './RightBar'
// import Header from './Header'

import Layout from '../observables/Layout'

const observe = new Layout()

const styles = {
  container: {
    height: 400
  }
}


const home = observer (
  class Home extends Component {
    checkWidth(width){
      if(width > 1200){
        return(
          <Grid columns='equal'>
            <Grid.Column width={3}>
            <SideBar name='Few words from the GM'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <HotelSlider/>  
            </Grid.Column>
            <Grid.Column width={3}>
            <RightBar name='Upcoming Events'/>
            </Grid.Column>
          </Grid>
        )
      }else if(width > 900){
        return(
          <Grid columns='equal'>
            <Grid.Column width={3}>
            <SideBar name='Few words from the GM'/>
            </Grid.Column>
            <Grid.Column width={13}  stretched>
              <HotelSlider/>  
            </Grid.Column>
            
          </Grid>
        )
      }else if (width > 700){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <HotelSlider size={700}/>  
            </Grid.Column>
          </Grid>
        )
      }else if (width > 600){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <HotelSlider size={600}/>  
            </Grid.Column>
          </Grid>
        )
      }else if (width > 500){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <HotelSlider size={500}/>  
            </Grid.Column>
          </Grid>
        )
      }else{
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <HotelSlider size={400}/>  
            </Grid.Column>
          </Grid>
        )
      }
    }
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
    render(){
      return(
        <div style={styles.container}>
          {this.checkWidth(observe.width)}
        </div>
      )
    }
  }
)


export default home