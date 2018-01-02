import React from 'react'
import { Card, Header, Icon, Button } from 'semantic-ui-react'


const styles = {
  container: {
    backgroundColor: 'transparent',
    height: 400,
    paddingTop: 10,
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Dancing Script, cursive',
    color: 'rgba(17,0,0,0.7)',
    marginBottom: 0
  },
  sub: {
    textAlign: 'center',
    color: '#666'
  }
}
export default props => (
  <div className='animated fadeIn' style={styles.container}>
    {/* <Card style={styles.container}> */}
    <Header as='h2' dividing style={styles.title}>{props.name}</Header>
    <br/>
    <Button primary animated='fade' fluid onClick={()=> console.log('test')}>
      <Button.Content visible>
      <Icon name='hotel'/>
      Book
      </Button.Content>
      <Button.Content hidden>
      <Icon name='call'/>
      215-862-5221
      </Button.Content> 
    </Button>
    
    
    {/* </Card> */}
  
  </div>
)