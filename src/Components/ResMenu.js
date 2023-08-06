import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { ShimmerTable } from "react-shimmer-effects";
import RestaurantCategory from "./RestaurantCategory";
// import ResMenuList from "./ResMenuList";

const ResMenu = () => {
  const { res } = useParams();

  const resInfo = useRestaurantMenu(res);
console.log(resInfo)
  if (resInfo === null) return <ShimmerTable row={5} col={5} />;

  const { name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString, areaName, city } =
    resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } =
    //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // const nestedcategories =
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    //   (e) =>
    //     e?.card?.["card"]?.["@type"] ===
    //     "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    // );
  return (
    <>
      <div className="container mx-auto">
        <div className="my-10 mx-2 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-extrabold">{name}</h1>
                <p>{areaName}, {city} </p>
                <h3>
                {cuisines.join(", ")} - {costForTwoMessage}
                </h3>
            </div>
            <div>
                <div className="text-center border px-2 py-4 rounded-lg">
                {avgRatingString>=4 ? <h2 className="font-extrabold text-lg text-green-500 border-b">🟢 {avgRatingString}</h2> :<h2 className="font-extrabold text-lg text-red-500 border-b">🔴 {avgRatingString}</h2> }
                    
                    <p className="text-sm">{totalRatingsString}</p>
                </div>
            </div>
        </div>
        <div>
        {/* {nestedcategories?.map((category) => (
            <RestaurantCategory
              data={category?.card?.card}
              key={category?.card?.card.title}
            />
          ))} */}
          {categories?.map((category) => (
            <RestaurantCategory
              data={category?.card?.card}
              key={category?.card?.card.title}
            />
          ))}
        </div>
      </div>
      <ul>
        
      </ul>
    </>
  );
};
export default ResMenu;
