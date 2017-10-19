import React from 'react'
import { Image, Message } from 'semantic-ui-react'
import Pool1 from '../assets/pool1.jpeg'
import Pool2 from '../assets/pool2.jpg'
import Pool3 from '../assets/pool3.jpg'
import Pool4 from '../assets/pool4.jpg'
export default props => (
  <div>
    <Message
      icon='life ring'
      header='Outdoor Swimming Pool'
      content='Seasonal'
      success
    />

    <Image src={Pool3} fluid/>
    <br/>
    <Image src={Pool4} fluid/>
    <br/>
    <Message
      icon='cocktail'
      header='Pool Bar & Acoustic Sundays'
      content='Seasonal'
      success
    />
    <Image src={Pool2} fluid/>
    <br/>
    <Image src={Pool1} fluid/>
  </div>
)