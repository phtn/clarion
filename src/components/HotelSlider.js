import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Desk from '../assets/desk.jpg'
// import Lobby from '../assets/lobby.jpg'
// import Bar from '../assets/bar.jpg'
// import Rest from '../assets/rest.jpg'
import REST1 from '../assets/erREST1.png'
import REST2 from '../assets/erREST2.png'
import BAR1 from '../assets/erBAR1.png'
import BAR2 from '../assets/erBAR2.png'
import BRK1 from '../assets/erBRK1.png'
import LOB1 from '../assets/erLOB1.png'
import LOB2 from '../assets/erLOB2.png'
import NYE from '../assets/nye.jpg'
// import ev1 from '../assets/ev1.jpg'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
}

const styles = {
  container: {
    // border: '1px solid yellow'
  },
  photos: {
    borderRadius: 3,
    boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.2)',

  }
}
const PhotosArray = [NYE,LOB1,LOB2,REST1,REST2,BAR1,BAR2,LOB1,LOB2]
const getPhotos = (arr, size) => {
  return arr.map(i=> (
    <div key={arr.indexOf(i)} styles={styles.container}>
      <img src={i} alt='' height={'auto'} width={size} style={styles.photos} className='animated fadeIn'/>
    </div>
  ))
}

export default props => (
  <div>
    <Slider {...settings}>
      {getPhotos(PhotosArray, props.size)}
    </Slider>
  </div>
)