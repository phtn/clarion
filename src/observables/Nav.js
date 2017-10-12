import { action, computed, extendObservable } from 'mobx'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'reservations'
    })
  }
}
export default NavObservables