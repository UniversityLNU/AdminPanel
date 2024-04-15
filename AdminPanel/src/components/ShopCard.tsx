import React from "react";
import { useGetAllShopItemsQuery } from "../store/api/shopApi";

interface ShopCardProp {
    itemId: string,
    itemImage: string,
    title: string,
    description: string,
    price: number,
    itemCount: number
}

const ShopCard: React.FC<ShopCardProp> = ({itemId,description,itemImage,itemCount,price,title}) => {
    return <div className=" flex flex-col text-white">
        <img className=" w-[260px] h-[224px]" src={itemImage}/>
        <h1 className=" font-bold w-[260px] text-center">{title}</h1>
        <h1 className=" w-[260px] text-center">{description}</h1>
        <div className="rounded-[101px] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] w-fit mb-4 text-white py-[13px] px-[41px] mx-auto">{price}</div>
    </div>
}

export default ShopCard;