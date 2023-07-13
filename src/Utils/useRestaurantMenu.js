import { useEffect, useState } from "react";
import { MENU_API } from "../Utils/constants";

const useRestaurantMenu = (res) =>{
    
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () =>{
            const data = await fetch(MENU_API + res);
            const json = await data.json();
            console.log(json);
            setResInfo(json.data)
        }
        
    useEffect(() => {
                 fetchMenu()
        },[]);
    
    return resInfo;
}
export default useRestaurantMenu