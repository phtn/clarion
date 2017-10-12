import { action, computed, extendObservable } from 'mobx'

class Layout {
    constructor(){
        extendObservable(this, {
            shrink: action(()=> {
                setTimeout(t=> {
                    return this.logoSize
                }, 1000)
            }),
            logoSize: computed(c=> {return this.gradientShrink}),
            gradientShrink: 100
                
        })
    }
}
export default Layout