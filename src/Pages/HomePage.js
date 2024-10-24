import React from 'react'
import Slider from '../Components/Slider'
import { Request } from '../Request'

export default function HomePage() {
  return (
    <div>
        <Slider title='Trending Now' source={Request.Fetch_Trending}/>
        <Slider title='Top-rated' source={Request.Top_Rated}/>
        <Slider title='Action' source={Request.Action_Movies}/>
    </div>
  )
}
