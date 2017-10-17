import React from 'react'
import { Grid, Header, Segment, Divider, Button, Item, Icon } from 'semantic-ui-react'
import Bed from '../assets/bed.jpg'

const segment = {
  borderRadius: 2
}
const reserve = {
  textAlign: 'center',
  height: 'auto',
  borderLeft: '1px solid #eeeeee'
}
export default props => (
  <div>

    <Grid>
      <Grid.Column width={4}>
        <img src={Bed} alt='' width={300} height='auto'/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h2'>
          Single King Bed
          <Header.Subheader>
            1 Non-smoking Single King size bed
          </Header.Subheader>
          <Divider/>
          <Item.Content>
            <Item.Extra>
              <Icon color='green' name='check' /> High Speed Wifi
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Professional Business Center
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Fitness Center
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Restaurant & Bar
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Free Parking (Bus & Trucks)
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Refrigerator & Microwave
            </Item.Extra>
            <Item.Extra>
              <Icon color='green' name='check' /> Hot Breakfast served everyday
            </Item.Extra>
          </Item.Content>
        </Header>
      </Grid.Column>
      <Grid.Column width={4} style={reserve}>
        <br/><br/>
        <Segment attached='top'>
            <Header as='h3' content='Book your room now and take advantage of our limited discounted rates!' />
          </Segment>
          <Button
            color='blue'
            size='massive'
            attached='bottom'
            content='Reserve'
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPress}
          />
      </Grid.Column>
    </Grid>
      <Divider/>
    <Grid>
      <Grid.Column width={4}>
        <img src={Bed} alt='' width={300} height='auto'/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h2' content='2 Double Beds'/> 
      </Grid.Column>
    </Grid>
    <Divider/>
    <Grid>
      <Grid.Column width={4}>
        <img src={Bed} alt='' width={300} height='auto'/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h2' content='King Suite'/> 
      </Grid.Column>
    </Grid>
    <Divider/>
    <Grid>
      <Grid.Column width={4}>
        <img src={Bed} alt='' width={300} height='auto'/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as='h2' content='Double Beds Suite'/> 
      </Grid.Column>
    </Grid>
    
  </div>
)