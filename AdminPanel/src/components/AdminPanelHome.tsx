import { Button } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FundraisingCard from "./FundraisingsCard";
import { useGetUnapprovedFundraisingsQuery } from "../store/api/fundraisingApi";
import { useApproveDeclineFundraisingMutation } from "../store/api/fundraisingApi";
import { useGetAllShopItemsQuery, useUploadNewShopItemMutation } from "../store/api/shopApi";
import ShopCard from "./ShopCard";

export interface ShopItemRequestModel {
  title: string;
  price: number;
  description: string;
  itemCount: number;
  itemImage: string;
}

const initState: ShopItemRequestModel = {
  title: "",
  price: 0,
  description: "",
  itemCount: 0,
  itemImage: "" 
}

const AdminPanelHome = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const [addItem, setAddItem] = useState<boolean>(false);
  const [newItem, setNewItem] = useState<ShopItemRequestModel>(initState)
  const [uploadNewItem] = useUploadNewShopItemMutation()
  const { data } = useGetUnapprovedFundraisingsQuery();
  const [method, { data: approveDeclineData }] =
    useApproveDeclineFundraisingMutation();
  const { data: shopItem } = useGetAllShopItemsQuery();
  console.log(shopItem);

  const onAddNewItemHandler = () => {
    uploadNewItem(newItem)
  }

  const onTitleSetHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((prev) => {
      prev.title = event.target.value
      return prev
    })
  }

  const onPriceSetHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((prev) => {
      prev.price = +event.target.value
      return prev
    })
  }
  const onDescriptionSetHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((prev) => {
      prev.description = event.target.value
      return prev
    })
  }

  const onItemCountSetHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((prev) => {
      prev.itemCount = +event.target.value
      return prev
    })
  }
  const onItemImageSetHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem((prev) => {
      prev.itemImage = event.target.value
      return prev
    })
  }

  const onFundRaisingCheck = () => {
    setChecked(true);
  };

  const onShopCheck = () => {
    setChecked(false);
  };

  const onAddItemChangeHandler = () => {
    setAddItem(true);
  };
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      <div className=" flex justify-center gap-10 mb-[30px] pt-[50px]">
        <div className=" flex flex-col items-center self-center">
          <h1 onClick={onFundRaisingCheck} className=" text-white">
            Fundraisers
          </h1>
          <div
            className={`${
              checked ? "w-[5px] h-[5px] bg-white rounded-[50%]" : "hidden"
            } `}
          ></div>
        </div>
        <div className="  w-[219px] h-[219px] top-[78px]  rounded-[50%] border-2 text-white bg-black flex justify-center items-center">
          <h1 className="text-[27px]">Logo</h1>
        </div>
        <div className=" flex flex-col items-center self-center">
          <h1 onClick={onShopCheck} className=" text-white ml-9">
            Shop
          </h1>
          <div
            className={`${
              !checked
                ? "w-[5px] ml-9 h-[5px] bg-white rounded-[50%]"
                : "hidden"
            } `}
          ></div>
        </div>
      </div>
      {!addItem && (
        <Button
          onClick={onAddItemChangeHandler}
          className="rounded-[101px] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] w-fit mb-4 text-white py-[13px] px-[41px]"
        >
          Add New Item
        </Button>
      )}
      {!addItem && (
        <div>
          {!checked && (
            <div className="grid grid-cols-3 gap-8 ">
              {shopItem?.map((item, index) => {
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
          )}
          {checked && (
            <div className="flex flex-col gap-8 ">
              {data?.map((item, index) => (
                <FundraisingCard
                  method={method}
                  Url={item.fundraisingUrl}
                  key={index}
                  id={item.fundraisingId}
                  title={item.title}
                  company={item.fundraisingCompany}
                  description={item.description}
                  goal={item.goal}
                  type={item.fundraisingType}
                />
              ))}
            </div>
          )}
        </div>
      )}
      {addItem && (
        <div className="flex flex-col gap-4 ">
          <input
            className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
            onChange={(event) => onTitleSetHandle(event)}
            placeholder="Enter title for item"
          />
          <input
            className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
            onChange={(item) => onItemImageSetHandle(item)}
            placeholder="Enter image URL"
          />
          <input
            className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
            onChange={(event) => onDescriptionSetHandle(event)}
            placeholder="Enter description*"
          />
          <input
            className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
            onChange={(event) => onItemCountSetHandle(event)}
            placeholder="Enter quantity"
          />
          <input
            className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
            onChange={(event) => onPriceSetHandle(event)}
            placeholder="Enter price"
          />
        </div>
      )}
      {addItem && (
        <Button
          onClick={onAddNewItemHandler}
          className="rounded-[101px] mt-4 bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] w-fit mb-4 text-white py-[13px] px-[41px]"
        >
          Add New Item {"->"}
        </Button>
      )}
    </div>
  );
};

export default AdminPanelHome;
