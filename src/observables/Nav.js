import { action, computed, extendObservable } from 'mobx'

class NavObservables {
  constructor(){
    extendObservable(this, {
<<<<<<< HEAD
      active: 'Home',
=======
      active: 'Reservations',
>>>>>>> 7a17cbd3b84e8f9058f3e4d81b2b110e3a4c0aa9
      setActive: action((a)=> {
        
        this.active = a
        console.log(this.active)
      })
    })
  }
}
export default NavObservables