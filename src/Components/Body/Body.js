import React, { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../../Utils/mockData'


let demorestList = [...resList]

const Body = () => {

  const [resList, setReslist] = useState(demorestList)

  return (
    <div className='body'>
      <div className='filter-btn'>
        <button onClick={(e) => {
          const result = demorestList.filter(
            (e) => e.data.avgRating > 4
          );
          setReslist(result)
          console.log(result);
        }}>Top Rated Restaurant</button>
        <button onClick={(e) => {
          setReslist(demorestList)
          console.log(demorestList);
        }}>Reset</button>
      </div>
      <div className='res-container'>
        {resList.map((e) => (<RestaurantCard key={e.data.id} {...e} />))}
      </div>
    </div>
  )
}

export default Body
