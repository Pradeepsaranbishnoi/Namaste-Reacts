import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
// import resList from '../../Utils/mockData'
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';


const Body = () => {

  const [resList, setReslist] = useState('')
  const [searchText,setSearchText] = useState('')
  const [filteredSearch, setFilteredSearch] = useState('')
  
  useEffect(()=>{
    fetchData();
  },[])

  
  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)
    setReslist(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredSearch(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <><h1>Your are offiline please check your internet connection</h1></>
  
  return (
    <div className='body'>
      <div className='container mx-auto filter-btn flex gap-10 my-10 px-5 items-center justify-between'>
        <div className='search flex gap-5 rounded-lg'>
          <input type='text' className='border rounded-lg' value={searchText} 
          onChange={(e)=> setSearchText(e.target.value)}/>
          
          <button className='bg-green-200 hover:bg-green-300 px-5 py-2 rounded-lg' onClick={()=>{
          console.log(searchText);
            const filteredSearch =  resList.filter((e) =>e.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            
            setFilteredSearch(filteredSearch)
            console.log(filteredSearch)

          }}
          >Search</button>
        </div>
        <div>
          <button className='bg-orange-200 hover:bg-orange-300 px-5 py-2 rounded-lg ' onClick={(e) => {
            const result = filteredSearch.filter(
              (e) => e.data.avgRating > 4
            );
            setReslist(result)
            console.log(result);
          }}>Top Rated Restaurant</button>
        </div>
      </div>
      { 
        resList ?
          <div className='container mx-auto flex flex-wrap gap-6 my-10'>
            {
              filteredSearch.map((e) => (
                <Link to={"/restaurants/" + e.info.id}>
                
                  <RestaurantCard key={e.info.id} {...e} />
                
                </Link>
              ))
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
