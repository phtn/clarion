import React from 'react'
import { Card, Header, Item, Icon } from 'semantic-ui-react'
const styles = {
  container: {
    backgroundColor: 'transparent',
    height: 400,
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Dancing Script, cursive',
    color: 'rgba(17,0,0,0.7)',
    marginBottom: 0
  },
  sub: {
    textAlign: 'center',
    color: '#666'
  },
  items: {
    textAlign: 'left'
  }
}
export default props => (
  <div className='animated fadeIn'>
    <Card style={styles.container}>
    <Header as='h2' dividing style={styles.title}>{props.name}</Header>
    <Header sub dividing style={styles.sub}>{props.sub}</Header>
    <Item.Content style={styles.items}>
      <Item.Description >
        <Icon color='green' name='check' /> High Speed Wifi
      </Item.Description>
      <Item.Extra>
        <Icon color='green' name='check' /> Business Center
      </Item.Extra>
      <Item.Extra>
        <Icon color='green' name='check' /> Fitness Center
      </Item.Extra>
      <Item.Extra>
        <Icon color='green' name='check' /> Restaurant & Bar
      </Item.Extra>
      <Item.Extra>
        <Icon color='green' name='check' /> Free Parking
      </Item.Extra>
      <Item.Extra>
        <Icon color='green' name='check' /> Refrigerator
      </Item.Extra>
      <Item.Extra>
        <Icon color='green' name='check' /> Microwave
      </Item.Extra>
    </Item.Content>
    
    </Card>
  
  </div>
)