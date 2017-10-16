import { action, computed, extendObservable } from 'mobx'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Home',
      setActive: action((a)=> {
        
        this.active = a
        console.log(this.active)
      })
    })
  }
}
export default NavObservables