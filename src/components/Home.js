import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Desk from '../assets/desk.jpg'
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  fade: true,
}
const style = {
  textAlign: 'center'
}
export default props => (
  <div>
    <Slider {...settings}>
      <div {...style}>
        <img src={Desk} alt='' height={'auto'} width={window.innerWidth}/>
      </div>
      <div {...style}>2</div>
      <div {...style}>3</div>
      <div {...style}>4</div>
    </Slider>
  </div>
)