import React from 'react'
import { Grid } from 'semantic-ui-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotelSlider from './HotelSlider'
import Header from './Header'
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  fade: true,
}
const container = {
  display: 'flex',
  justifyContent: 'right',
  width: window.innerWidth,
  height: 400,
}
const photos = {
  alignItems: 'center'
}
const style = {
  textAlign: 'center'
}
export default props => (
  <Grid>
    <Grid.Column width={6}>
      <HotelSlider />    
    </Grid.Column>
    <Grid.Column width={8}>
      <Header />  
    </Grid.Column>
  </Grid>
)