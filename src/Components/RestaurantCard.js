import React from 'react'
import { CDN_URL } from '../Utils/constants';

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwoString, deliveryTime, cloudinaryImageId } = props?.data;

  return (
    <>
      <div className='res-card'>
        <img alt='res-img' className='res-img'
          src={CDN_URL +
            cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines && cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwoString}</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </>
  )
}

export default RestaurantCard