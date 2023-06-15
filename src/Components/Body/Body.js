import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../../Utils/mockData'


let demorestList = [...resList]

const Body = () => {
  
  const [resList, setReslist] = useState(demorestList)

  return (
    <div className='body'>
      <div className='filter-btn'>
        <button onClick={(e) =>{
        demorestList =  demorestList.filter(
        (e)=>e.data.avgRating>4
       );
       setReslist(demorestList)
        console.log( demorestList);
      }}>Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
        { resList.map((e) => (<RestaurantCard key={e.data.id} {...e} />))}
      </div>
    </div>
  )
}

export default Body
