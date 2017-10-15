import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const style = {
  textAlign='center'
}
export default props => (
  <div>
    <Slider {...settings}>
      <div {...style}>1</div>
      <div {...style}>2</div>
      <div {...style}>3</div>
      <div {...style}>4</div>
    </Slider>
  </div>
)