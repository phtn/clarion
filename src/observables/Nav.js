import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Home from '../components/Home'
import Reservations from '../components/Reservations'
import Amenities from '../components/Amenities'
import Restaurant from '../components/Restaurant'
import Events from '../components/Events'
import Destinations from '../components/Destinations'
import Activities from '../components/Activities'
import Map from '../components/Map'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Amenities',
      setActive: action((a)=> {
        this.active = a
        console.log(this.active)
      }),
      renderComponent: computed((comp)=> {
        switch(this.active){
          case 'Home': {
            return <Home/>
            break
          }
          case 'Reservations': {
            return <Reservations/>
            break
          }
          case 'Amenities': {
            return <Amenities/>
            break
          }
          case 'Restaurant': {
            return <Restaurant/>
            break
          }
          case 'Events': {
            return <Events/>
            break
          }
          case 'Destinations': {
            return <Destinations/>
            break
          }
          case 'Activities': {
            return <Activities/>
            break
          }
          case 'Map': {
            return <Map/>
            break
          }
          default: 
            return <Home/>
        }
      })
    })
  }
}
export default NavObservables