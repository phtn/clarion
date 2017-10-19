import React from 'react'
import { Grid } from 'semantic-ui-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HotelSlider from './HotelSlider'
import Header from './Header'

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