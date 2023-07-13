import useRestaurantMenu from "../Utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { ShimmerTable } from "react-shimmer-effects";


const ResMenu = () =>{

    const {res} = useParams();

    const resInfo = useRestaurantMenu(res);

    if (resInfo === null) return <ShimmerTable row={5} col={5}/>

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
           
            <ul>
                {itemCards?.map( (item) => 
                ( 
                    <li key={item.card.info.id}>{item.card.info.name} - ₹ {item.card.info.price/100} </li>
                ))}
                
            </ul>
        </>
    )
}
export default ResMenu