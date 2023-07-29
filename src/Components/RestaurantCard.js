import React from 'react'
import { CDN_URL } from '../Utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId } = props?.info;
  // console.log(props)
  return (
    <>
      <div className='w-[275px] bg-orange-200 hover:bg-orange-300 rounded-lg m-1'>
        <img alt='res-img' className='rounded-xl p-2'
          src={CDN_URL +
            cloudinaryImageId} />
        <div className='p-5 break-all'>
          <h3 className='font-extrabold'>{name}</h3>
          <h4>{cuisines && cuisines.join(",")}</h4>
          <h4>{avgRating} Stars</h4>
          <h4>{costForTwoString}</h4>
          <h4>{deliveryTime} Minutes</h4>
        </div>
        
      </div>
    </>
  )
}

// Higher order component
export const withPromotedLable = (RestaurantCard) =>{
  return (props) => {
    return(
      <>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard