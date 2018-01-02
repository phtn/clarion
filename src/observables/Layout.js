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
          fontFamily: 'Great Vibes, cursive',
          fontWeight: 100,
          fontSize: this.getWidth(this.width),
          color: 'gray'
        }
      }),
      lv: computed(()=> {
        return {
          marginLeft: 50,
          marginTop: 50,
          fontFamily: 'Great Vibes, cursive',
          fontWeight: 100,
          fontSize: this.getWidth(this.width),
          color: 'gray'
        }
      }),
      getWidth: action((width)=> {
        if (this.width < 500){
          return 20
        } else {
          return 30
        }
      }),
      
      
      resizedWidth: action((width)=> {
        this.width = width
      }),
      
      

    })
  }
}
export default Layout

// gm notes
// reviews slide
//