import React, { Component } from 'react'
import { observer } from 'mobx-react' 
import { Menu, Icon } from 'semantic-ui-react'
import NavObservables from '../observables/Nav'
import LayoutObservables from '../observables/Layout'
const styles = {
  container: {
    paddingTop: 10,
    margin: 20
  },
  nav: {
    cursor: 'pointer',
  },
  segment: {
    borderRadius: 5,
    padding: 0,
    width: 'auto',
  },
  item: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    letterSpacing: 1
  }
}


const navObserv = new NavObservables()
const layoutObserv = new LayoutObservables()


const NavObserver = observer (
  class Nav extends Component {
    checkWidth(width){
      if ( width > 800 ){
        return(
          <Menu inverted style={styles.nav} widths={8} fluid>
            <Menu.Item style={styles.item} name='Home' active={navObserv.active === 'Home'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='Reservations' active={navObserv.active === 'Reservations'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='amenities' active={navObserv.active === 'Amenities'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='restaurant' active={navObserv.active === 'Restaurant'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='events' active={navObserv.active === 'Events'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='destinations' active={navObserv.active === 'Destinations'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='activities' active={navObserv.active === 'Activities'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)} />
            <Menu.Item style={styles.item} name='map' active={navObserv.active === 'Map'} onClick={(e)=> navObserv.setActive(e.target.innerHTML)}/>
          </Menu>
        )
      }else if ( width < 800 ){
        return(
          <Menu inverted style={styles.nav} widths={8} fluid>
            <Menu.Item style={styles.item} name='Home' active={navObserv.active === 'Home'} onClick={(e)=> navObserv.setActive('Home')} ><Icon name='home'/></Menu.Item>
            <Menu.Item style={styles.item} name='Reservations' active={navObserv.active === 'Reservations'} onClick={(e)=> navObserv.setActive('Reservations')} ><Icon name='hotel'/></Menu.Item>
            <Menu.Item style={styles.item} name='amenities' active={navObserv.active === 'Amenities'} onClick={(e)=> navObserv.setActive('Amenities')} ><Icon name='diamond'/></Menu.Item>
            <Menu.Item style={styles.item} name='restaurant' active={navObserv.active === 'Restaurant'} onClick={(e)=> navObserv.setActive('Restaurant')} ><Icon name='fire'/></Menu.Item>
            <Menu.Item style={styles.item} name='events' active={navObserv.active === 'Events'} onClick={(e)=> navObserv.setActive('Events')} ><Icon name='ticket'/></Menu.Item>
            <Menu.Item style={styles.item} name='destinations' active={navObserv.active === 'Destinations'} onClick={(e)=> navObserv.setActive('Destinations')} ><Icon name='compass'/></Menu.Item>
            <Menu.Item style={styles.item} name='activities' active={navObserv.active === 'Activities'} onClick={(e)=> navObserv.setActive('Activities')} ><Icon name='bicycle'/></Menu.Item>
            <Menu.Item style={styles.item} name='map' active={navObserv.active === 'Map'} onClick={(e)=> navObserv.setActive('Map')} ><Icon name='map pin'/></Menu.Item>
          </Menu>
        )
      }
    }
    componentDidMount(){
      window.addEventListener('resize', ()=> {
        layoutObserv.resizedWidth(window.innerWidth)
      })
    }
    componentWillUnmount(){
      window.removeEventListener('resize', ()=> {
        layoutObserv.resizedWidth(window.innerWidth)
      })
    }
    render(){
      return(
        <div style={styles.container}>
          {this.checkWidth(layoutObserv.width)}
        <section style={styles.segment}>
          {navObserv.renderComponent}
        </section>
        <br/><br/><br/>
        </div>
      )
    }
  }
)
export default NavObserver