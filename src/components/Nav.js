import React, { Component } from 'react'
import { observer } from 'mobx-react' 
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import NavObservables from '../observables/Nav'

<<<<<<< HEAD
import Home from './Home'
=======
>>>>>>> 7a17cbd3b84e8f9058f3e4d81b2b110e3a4c0aa9

const container = {
  paddingTop: 10,
  width: window.innerWidth - 50,
  height: window.innerHeight - 50
}
const nav = {
  borderRadius: 2,
  cursor: 'pointer'
}

const navObserv = new NavObservables()


const NavObserver = observer (
  class Nav extends Component {
    render(){
      return(
        <div style={container}>
          <Menu fluid widths={8} inverted style={nav}>
          <Menu.Item name='Home' active={navObserv.active === 'Home'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='Reservations' active={navObserv.active === 'Reservations'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='amenities' active={navObserv.active === 'Amenities'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='restaurant' active={navObserv.active === 'Restaurant'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='events' active={navObserv.active === 'Events'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='destinations' active={navObserv.active === 'Destinations'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
          <Menu.Item name='activities' active={navObserv.active === 'Activities'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
<<<<<<< HEAD
          <Menu.Item name='map' active={navObserv.active === 'Map'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)}/>
        </Menu>
  
        <Segment style={nav}>
        <Home />
=======
  
          <Menu.Menu position='right'>
            <Menu.Item name='map' active={navObserv.active === 'Map'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)}>
              <Icon name='marker' color='red'/>
              Map
            </Menu.Item>
          </Menu.Menu>
        </Menu>
  
        <Segment style={nav}>
          Coming Soon!
>>>>>>> 7a17cbd3b84e8f9058f3e4d81b2b110e3a4c0aa9
        </Segment>
        </div>
      )
    }
  }
)
export default NavObserver