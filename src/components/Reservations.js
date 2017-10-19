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
const items = {
  fontSize: 12
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
          <Item.Content style={items}>
            <Item.Description >
              <Icon color='green' name='check' /> High Speed Wifi
            </Item.Description>
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
            as='a'
            href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668/rates'
            positive='true'
            size='massive'
            attached='bottom'
            content='Book this Room'
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
      <Header as='h2'>
          2 Double Beds
          <Header.Subheader>
            2 Non-smoking Double beds
          </Header.Subheader>
          <Divider/>
          <Item.Content style={items}>
            <Item.Description >
              <Icon color='green' name='check' /> High Speed Wifi
            </Item.Description>
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
            as='a'
            href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668/rates'
            positive='true'
            size='massive'
            attached='bottom'
            content='Book this Room'
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
    <Header as='h2'>
        King Suite
        <Header.Subheader>
          1 Non-smoking King size bed and full set sofa
        </Header.Subheader>
        <Divider/>
        <Item.Content style={items}>
          <Item.Description >
            <Icon color='green' name='check' /> High Speed Wifi
          </Item.Description>
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
          as='a'
          href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668/rates'
          color='orange'
          size='massive'
          attached='bottom'
          content='Book this Suite'
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
      <Header as='h2'>
          Double Bed Suite
          <Header.Subheader>
            2 Non-smoking Double beds and full set sofa
          </Header.Subheader>
          <Divider/>
          <Item.Content style={items}>
            <Item.Description >
              <Icon color='green' name='check' /> High Speed Wifi
            </Item.Description>
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
            as='a'
            href='https://www.choicehotels.com/pennsylvania/new-hope/clarion-hotels/pa668/rates'
            color='orange'
            size='massive'
            attached='bottom'
            content='Book this Suite'
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPress}
          />
      </Grid.Column>
    </Grid>
    
  </div>
)