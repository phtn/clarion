import { action, computed, extendObservable } from 'mobx'

class Layout {
  constructor(){
    extendObservable(this, {
      width: window.innerWidth,
      logoSize: 100,
      nh: computed(()=> {
        return {
          marginRight: 50,
          marginTop: 50,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 100,
          fontSize: this.getWidth(this.width),
          color: 'gray'
        }
      }),
      lv: computed(()=> {
        return {
          marginLeft: 50,
          marginTop: 50,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 100,
          fontSize: this.getWidth(this.width),
          color: 'gray'
        }
      }),
      getWidth: action((width)=> {
        if (this.width < 500){
          return 0
        } else {
          return 24
        }

      }),
      resizedWidth: action((width)=> {
        this.width = width
      })

    })
  }
}
export default Layout