import React, { Component } from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import NavObservables from '../observables/Nav'

const container = {
  paddingTop: 10,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50
}
const nav = {
  borderRadius: 2
}

const navObserv = new NavObservables()


class Nav extends Component {
  render(){
    return(
      <div style={container}>
        <Menu fluid widths={8} inverted style={nav}>
        <Menu.Item name='home' active={navObserv.active === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='reservations' active={navObserv.active === 'reservations'} onClick={this.handleItemClick} />
        <Menu.Item name='amenities' active={navObserv.active === 'amenities'} onClick={this.handleItemClick} />
        <Menu.Item name='restaurant' active={navObserv.active === 'restaurant'} onClick={this.handleItemClick} />
        <Menu.Item name='events' active={navObserv.active === 'events'} onClick={this.handleItemClick} />
        <Menu.Item name='destinations' active={navObserv.active === 'destinations'} onClick={this.handleItemClick} />
        <Menu.Item name='activities' active={navObserv.active === 'activities'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='map' active={navObserv.active === 'logout'} onClick={this.handleItemClick}>
            <Icon name='marker' color='red'/>
            Map
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment style={nav}>
        Coming Soon!
      </Segment>
      </div>
    )
  }
}
export default Nav