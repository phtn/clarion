import React from 'react'
import { Grid, Image, Message, Divider } from 'semantic-ui-react'
import NH1 from '../assets/nh1.jpg'
import NH2 from '../assets/nh2.jpg'
import NH3 from '../assets/nh3.jpg'
import NH4 from '../assets/nh4.jpg'
// import PV1 from '../assets/pv1.jpg'

// Peddler's

import P1 from '../assets/ped1.jpg'
import P2 from '../assets/ped2.jpg'
import P3 from '../assets/ped3.jpg'
import P4 from '../assets/ped4.jpeg'


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
    <Divider/>
    <Message
      icon='street view'
      header="Peddler's Village"
      content='Shops | Restaurants | Pubs '
      success
    />
    <Grid padded>
      <Grid.Column width={4}>
        <Image src={P1} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={P2} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={P3} shape={'rounded'}/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src={P4} shape={'rounded'}/>
      </Grid.Column>
    </Grid>
  </div>
)