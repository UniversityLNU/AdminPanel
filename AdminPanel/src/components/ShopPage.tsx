import { useGetAllShopItemsQuery } from "../store/api/shopApi";
import ShopCard from "./ShopCard";

const ShopPage = () => {
  const { data } = useGetAllShopItemsQuery();
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <ShopCard
            key={index}
            description={item.description}
            itemCount={item.itemCount}
            itemId={item.itemId}
            itemImage={item.itemImage}
            price={item.price}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default ShopPage;
