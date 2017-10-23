import React from 'react'
import { Grid, Image, Message, Icon, Divider } from 'semantic-ui-react'
import NH1 from '../assets/nh1.jpg'
import NH2 from '../assets/nh2.jpg'
import NH3 from '../assets/nh3.jpg'
import NH4 from '../assets/nh4.jpg'
import PV1 from '../assets/pv1.jpg'

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
        <Image src={PV1} shape={'rounded'}/>
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