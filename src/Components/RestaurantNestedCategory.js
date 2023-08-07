const RestaurantNestedCategory = ({data}) =>{
    return (
        <>
        <div className="bg-orange-200 hover:bg-orange-300 p-3 rounded-lg m-2"> 
            <h2 className="font-extrabold">{data.title} ({data.categories.itemCards})</h2>
        </div>
        <div className="m-2">
            {data.categories.itemCards?.map((item) => (
            <ResMenuList data={item.card.info} key={item.card.info.id} />
            ))}
        </div>
        </>
    )
}
export default RestaurantNestedCategory