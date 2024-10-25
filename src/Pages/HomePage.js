import React from 'react'
import Slider from '../Components/Slider'
import { Request } from '../Request'

export default function HomePage() {
  return (
    <div>
        <Slider title='Trending Now' source={Request.Fetch_Trending}/>
        <Slider title='Top-rated' source={Request.Top_Rated}/>
        <Slider title='Action' source={Request.Action_Movies}/>
        <Slider title='Animation' source={Request.Animation_Movies}/>
        <Slider title='Comedy' source={Request.Comedy_Movies}/>
        <Slider title='Horror' source={Request.Horror_Movies}/>
        <Slider title='Romance' source={Request.Romance_Movies}/>
        <Slider title='Documentaries' source={Request.Documentries}/>
        <Slider title='Science-Fiction' source={Request.Science_Fiction}/> 
        <Slider title='Thriller' source={Request.Thriller_Movies}/>
        
    </div>
  )
}
