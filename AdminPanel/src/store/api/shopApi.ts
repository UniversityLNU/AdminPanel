import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ShopItem } from "../../Models/ShopItemModel";
import { ShopItemRequestModel } from "../../components/AdminPanelHome";

export const shopApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b001-46-211-5-106.ngrok-free.app/api/Shop/",
  }),
  reducerPath: "shopApi/api",
  endpoints: (builder) => ({
    getAllShopItems: builder.query<ShopItem[], void>({
      query: () => ({
        url: "GetActiveShopItems",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
    
      }),
      transformResponse: (item:any) => item.shopList
    }),
    uploadNewShopItem: builder.mutation<any, ShopItemRequestModel>({
        query: (item) => ({
            url: "UploadShopItem",
            body: item,
            method: "POST"
        })
    })
  }),
});

export const { useGetAllShopItemsQuery, useUploadNewShopItemMutation } = shopApi;
