import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react'
import Snow from '../assets/snow.gif'
const styles = {
    container: {
      backgroundColor: 'transparent',
      height: 400,
      // paddingTop: 10
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Dancing Script, cursive',
      color: 'rgba(17,0,0,0.7)',
      marginBottom: 0
    },
    profileImage: {
      position: 'absolute',
      borderRadius: 75,
      left: 60  ,
      top: 240,
      boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
    },
    profileName: {
      textAlign: 'center',
      marginTop: 15,
      color: '#ce181e'
    },
    profilePosition: {
      fontFamily: 'Dancing Script, cursive',
      color: '#444'
    }
}
export default props => (
  <div className='animated fadeIn'>
    <Card style={styles.container}>
    {/* <Header as='h3' dividing style={styles.title}>{props.name}</Header> */}
    <Image 
      src={Snow} 
      label={{ as: 'a', color: 'red', content: 'Letter from the GM', icon: 'mail', ribbon: true }}
    />
    
    <Header as='h4' style={styles.profileName}>
      Juan Tablizo
      <Header.Subheader style={styles.profilePosition}>
        General Manager
      </Header.Subheader>
    </Header>

    </Card>
  
  </div>
)

// http://via.placeholder.com/350x150