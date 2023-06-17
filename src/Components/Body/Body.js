import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../../Utils/mockData'
import { ShimmerPostList } from "react-shimmer-effects";

let demorestList = [...resList]

const Body = () => {

  const [resList, setReslist] = useState("")

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setReslist(json?.data?.cards[2]?.data?.data?.cards);
  };


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
      { 
        resList ?
          <div className='res-container'>
            {
              resList.map((e) => (<RestaurantCard key={e.data.id} {...e} />))
            }
          </div> : 
        <>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
        </>
      }
      
    </div>
  )
}

export default Body
