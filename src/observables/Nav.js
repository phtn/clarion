import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Home from '../components/Home'
import Reservations from '../components/Reservations'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Reservations',
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
          default: 
            return <Home/>
        }
      })
    })
  }
}
export default NavObservables