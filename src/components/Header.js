import React from 'react'
import { Header, Divider, Label, Icon } from 'semantic-ui-react'

const icon = {
  marginLeft: 10
}
const label = {
  margin: 5
}
export default props => (
  <div>
    <Header 
      as='h2' 
      content='The Clarion Inn & Suites®' 
      subheader='Located in New Hope and Lambertville'/>
    <Divider />
    <Header as='h4'>
      The Clarion Inn & Suites® hotel in New Hope, Pennsylvania is just what you are looking for when all you need is a solid deal on a simple stay.
    </Header>

    <Header as='h4'>
      New Hope & Lambertville  is a historic riverside town known as a thriving antiques center, and our location off State Route 202 will put you close to a bustling community of boutique shops, high-end restaurants and attractions like:
    </Header>

    <Label style={label}>
      Peddler's Village
      <Icon name='street view' color='olive' style={icon}/>
    </Label>
    <Label style={label}>
      New Hope Winery
      <Icon name='cocktail' color='red' style={icon}/>
    </Label>
    <Label style={label}>
      Bucks County Playhouse
      <Icon name='music' color='blue' style={icon}/>
    </Label>
    <Label style={label}>
      Triumph Brewing Co.
      <Icon name='beer' color='yellow' style={icon}/>
    </Label>
    <Label style={label}>
      Bowman's Hill Wildflower
      <Icon name='tree' color='teal' style={icon}/>
    </Label>
    <Label style={label}>
      Washington Crossing State Park
      <Icon name='tree' color='teal' style={icon}/>
    </Label>
    <Label style={label}>
      Ralph Stover State Park
      <Icon name='tree' color='teal' style={icon}/>
    </Label>
    <Label style={label}>
      The Garden of Reflection 911 Memorial
      <Icon name='flag' color='blue' style={icon}/>
    </Label>
  </div>
)