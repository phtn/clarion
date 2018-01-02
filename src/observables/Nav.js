import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Home from '../components/Home'
import Reservations from '../components/ReservationSlide'
import Amenities from '../components/Amenities'
import Restaurant from '../components/Restaurant'
import Events from '../components/Events'
import Destinations from '../components/Destinations'
import Activities from '../components/Activities'
import Map from '../components/Map'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Home',
      setActive: action((a)=> {
        this.active = a
        console.log(this.active)
      }),
      renderComponent: computed((comp)=> {
        switch(this.active){
          case 'Home': {
            return <Home/>
          }
          case 'Reservations': {
            return <Reservations/>
          }
          case 'Amenities': {
            return <Amenities/>
          }
          case 'Restaurant': {
            return <Restaurant/>
          }
          case 'Events': {
            return <Events/>
          }
          case 'Destinations': {
            return <Destinations/>
          }
          case 'Activities': {
            return <Activities/>
          }
          case 'Map': {
            return <Map/>
          }
          default: 
            return <Home/>
        }
      })
    })
  }
}
export default NavObservables