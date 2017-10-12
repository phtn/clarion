import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

const container = {
  paddingTop: 10,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50
}
const activeItem='home'
class Nav extends Component {
  render(){
    return(
      <div style={container}>
        <Menu fluid widths={8} inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='reservations' active={activeItem === 'reservations'} onClick={this.handleItemClick} />
        <Menu.Item name='amenities' active={activeItem === 'amenities'} onClick={this.handleItemClick} />
        <Menu.Item name='restaurant' active={activeItem === 'restaurant'} onClick={this.handleItemClick} />
        <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
        <Menu.Item name='destinations' active={activeItem === 'destinations'} onClick={this.handleItemClick} />
        <Menu.Item name='activities' active={activeItem === 'activities'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='map' active={activeItem === 'logout'} onClick={this.handleItemClick}>
            <Icon name='marker' color='red'/>
            Map
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment>
        Coming Soon!
      </Segment>
      </div>
    )
  }
}
export default Nav