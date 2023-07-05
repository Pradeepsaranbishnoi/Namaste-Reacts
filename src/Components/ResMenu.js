import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ShimmerTable } from "react-shimmer-effects";
import { MENU_API } from "../Utils/constants";

const ResMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {res} = useParams();


    const fetchMenu = async () =>{
        const data = await fetch(MENU_API + res);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    
    useEffect(() => {
             fetchMenu()
    },[]);

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