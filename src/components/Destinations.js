import React from 'react'
import { Grid, Image, Message, Icon } from 'semantic-ui-react'
import NH1 from '../assets/nh1.jpg'
import NH2 from '../assets/nh2.jpg'
import NH3 from '../assets/nh3.jpg'
import NH4 from '../assets/nh4.jpg'
export default props => (
  <div>
    <Message
      icon='street view'
      header='New Hope Main Street'
      content='Shops | Restaurants | Bars '
      success
    />
    <Grid padded>
      <Grid.Column width={4}>
        <Image src={NH1} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={NH2} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={NH3} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={NH4} shape={'rounded'}/>
      </Grid.Column>
    </Grid>
  </div>
)