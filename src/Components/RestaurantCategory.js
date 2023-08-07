import ResMenuList from "./ResMenuList"
const RestaurantCategory = ({data}) => {
// console.log(data)
return(
    <>
        <div className="bg-orange-200 hover:bg-orange-300 p-3 rounded-lg m-2"> 
            <h2 className="font-extrabold">{data.title} ({data.itemCards.length})</h2>
        </div>
        <div className="m-2">
            {data.itemCards?.map((item) => (
            <ResMenuList data={item.card.info} key={item.card.info.id} />
            ))}
        </div>
       
    </>
)
}
export default RestaurantCategory