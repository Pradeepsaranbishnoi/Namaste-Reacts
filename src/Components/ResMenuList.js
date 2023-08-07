import { CDN_URL, NO_IMAGE } from "../Utils/constants"


const ResMenuList = (item) =>{
    // console.log(item)
    return(
        <>
        <div className="flex p-4 border-b border-gray-300">
            <div className="w-10/12 pr-2">
                <span>{item.data.itemAttribute.vegClassifier === "VEG" ? "🟩" :"🟥"}</span>
                <h2 className="font-bold">{item.data.name}</h2>
                <p className="font-semibold text-sm">₹{" "}
                    {item.data.price
                    ? item.data.price / 100
                    : item.data.defaultPrice / 100}{" "}
                </p>
                <p className="text-sm">{item.data.description}</p>
            </div>
            <div className="w-2/12">
                <img className="rounded-lg" alt='itemlist-img' src={CDN_URL + item.data.imageId !== CDN_URL + undefined  ? CDN_URL + item.data.imageId : NO_IMAGE} />
            </div>
        </div>
        </>
    )
}

export default ResMenuList