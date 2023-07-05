import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
// import resList from '../../Utils/mockData'
import { ShimmerPostList } from "react-shimmer-effects";
import { Link } from 'react-router-dom';



const Body = () => {

  const [resList, setReslist] = useState('')
  const [searchText,setSearchText] = useState('')
  const [filteredSearch, setFilteredSearch] = useState('')
  
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    setReslist(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredSearch(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className='body'>
      <div className='filter-btn'>
        <div className='search'>
          <input type='text' className='searh-box' value={searchText} 
          onChange={(e)=> setSearchText(e.target.value)}/>
          
          <button onClick={()=>{
          console.log(searchText);

            const filteredSearch =  resList.filter((e) =>e.data.name.toLowerCase().includes(searchText.toLowerCase())
            );
            
            setFilteredSearch(filteredSearch)
            console.log(filteredSearch)

          }}
          >Search</button>
        </div>
        <button onClick={(e) => {
          const result = filteredSearch.filter(
            (e) => e.data.avgRating > 4
          );
          setReslist(result)
          console.log(result);
        }}>Top Rated Restaurant</button>

      </div>
      { 
        resList ?
          <div className='res-container'>
            {
              filteredSearch.map((e) => (
                <Link to={"/restaurants/" + e.data.id}>
              <RestaurantCard key={e.data.id} {...e} /></Link>
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
