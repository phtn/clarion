import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Slider from 'react-slick'
import { Image, Grid } from 'semantic-ui-react'
import Bar from './Bar'
import RightBar from './RightBar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../animated.css'

import NK from '../assets/eNK1.png'
import NDD from '../assets/rNDD1.jpg'
import NDD2 from '../assets/erNDD2.png'
import GSK2 from '../assets/erGSK2.png'
import GSK from '../assets/rGSK1.jpg'

import Layout from '../observables/Layout'

const observe = new Layout()

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 5000,
  swipeToSlide: true,
  fade: true,
}
const styles = {
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    height: 400
  },
  slide: {
    // border: '1px solid red',
    // height: 400,
    // display: 'inline',
    // justifyContent: 'center',
    // // alignItems: 'center',
  },
  image: {
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.4)',
    borderRadius: '5px',
    // margin: 5
  },
  Segment: {
    // backgroundColor: 'transparent',
    height: 400,
    width: 200,
    border: 'none',
    boxShadow: '0px 0px 0px 0px',

  },items: {
    fontSize: 12,
  }
}
const reservations = observer (
  class ReservationSlide extends Component {
    renderNK(width){
      if (width > 1100){
        return(
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <Bar name='Single King Bed' sub='A Non-Smoking Single King Bed'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={NK} style={styles.image}/>
            </Grid.Column>
            <Grid.Column width={3}>
              <RightBar name='Book this Room Now !'/>
            </Grid.Column>
          </Grid>
        )
      }else if(width < 750){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={NK} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else if (width < 1000){
        return(
          <Grid columns='equal'>
            <Grid.Column width={4}>
              <Bar name='Single King Bed' sub='A Non-Smoking Single King Bed'/>
            </Grid.Column>
            <Grid.Column width={11}  stretched>
              <Image src={NK} style={styles.image}/>
            </Grid.Column>
            
          </Grid>
        )
      }else if(width < 800){
        return(
          <Grid columns='equal'>
            <Grid.Column width={6}>
              <Bar name='Single King Bed' sub='A Non-Smoking Single King Bed'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={NK} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else{
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={NK} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }
    }

    renderNDD(width){
      if (width > 1100){
        return(
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <Bar name='2 Double Beds' sub='A Non-Smoking 2 Double Beds'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={NDD2} style={styles.image}/>
            </Grid.Column>
            <Grid.Column width={3}>
              <RightBar name='Book this Room Now !'/>
            </Grid.Column>
          </Grid>
        )
      }else if(width < 750){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={NDD2} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else if (width < 1000){
        return(
          <Grid columns='equal'>
            <Grid.Column width={4}>
              <Bar name='2 Double Beds' sub='A Non-Smoking 2 Double Beds'/>
            </Grid.Column>
            <Grid.Column width={11}  stretched>
              <Image src={NDD2} style={styles.image}/>
            </Grid.Column>
            
          </Grid>
        )
      }else if(width < 800){
        return(
          <Grid columns='equal'>
            <Grid.Column width={6}>
              <Bar name='2 Double Beds' sub='A Non-Smoking 2 Double Beds'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={NDD2} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else{
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={NDD2} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }
    }

    renderGSK(width){
      if (width > 1100){
        return(
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <Bar name='King Grand Suite' sub='A Non-Smoking King Grand Suite'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={GSK2} style={styles.image}/>
            </Grid.Column>
            <Grid.Column width={3}>
              <RightBar name='Book this Room Now !'/>
            </Grid.Column>
          </Grid>
        )
      }else if(width < 750){
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={GSK2} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else if (width < 1000){
        return(
          <Grid columns='equal'>
            <Grid.Column width={4}>
              <Bar name='King Grand Suite' sub='A Non-Smoking King Grand Suite'/>
            </Grid.Column>
            <Grid.Column width={11}  stretched>
              <Image src={GSK2} style={styles.image}/>
            </Grid.Column>
            
          </Grid>
        )
      }else if(width < 800){
        return(
          <Grid columns='equal'>
            <Grid.Column width={6}>
              <Bar name='King Grand Suite' sub='A Non-Smoking King Grand Suite'/>
            </Grid.Column>
            <Grid.Column width={10}  stretched>
              <Image src={GSK2} style={styles.image}/>
            </Grid.Column>
          </Grid>
        )
      }else{
        return(
          <Grid columns='equal'>
            <Grid.Column width={16}  stretched>
              <Image src={GSK2} style={styles.image}/>
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
      return (
        <div style={styles.container} className='animated fadeIn'>
          <Slider {...settings}>
            <div style={styles.slide}>
              {this.renderNK(observe.width)}
            </div>
            <div style={styles.slide}>
              {this.renderNDD(observe.width)}
            </div>
            <div style={styles.slide}>
            {this.renderGSK(observe.width)}
            </div>
          </Slider>
        </div>
      )
    }
  }
)

export default reservations