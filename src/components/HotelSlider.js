import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Desk from '../assets/desk.jpg'
import Lobby from '../assets/lobby.jpg'
import Bar from '../assets/bar.jpg'
import Rest from '../assets/rest.jpg'

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
}
const photos = {
  borderRadius: 3,
  boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)',  
}
export default props => (
  <div>
    <Slider {...settings}>
      <div>
        <img src={Desk} alt='' height={'auto'} width={400} style={photos} />
      </div>
      <div>
      <img src={Lobby} alt='' height={'auto'} width={400} style={photos} />
      </div>
      <div>
      <img src={Bar} alt='' height={'auto'} width={400} style={photos} />
      </div>
      <div>
      <img src={Rest} alt='' height={'auto'} width={400} style={photos} />
      </div>
    </Slider>
  </div>
)