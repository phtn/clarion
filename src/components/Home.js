import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
<<<<<<< HEAD
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
=======
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const style = {
  textAlign='center'
>>>>>>> 7a17cbd3b84e8f9058f3e4d81b2b110e3a4c0aa9
}
export default props => (
  <div>
    <Slider {...settings}>
<<<<<<< HEAD
      <div {...style}>
        <img src={Desk} alt='' height={'auto'} width={window.innerWidth}/>
      </div>
=======
      <div {...style}>1</div>
>>>>>>> 7a17cbd3b84e8f9058f3e4d81b2b110e3a4c0aa9
      <div {...style}>2</div>
      <div {...style}>3</div>
      <div {...style}>4</div>
    </Slider>
  </div>
)