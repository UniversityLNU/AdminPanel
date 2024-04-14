import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ShopItem } from "../../Models/ShopItemModel";
import { ShopItemRequestModel } from "../../components/AdminPanelHome";

export const shopApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://44e0-195-160-235-15.ngrok-free.app/api/Shop/",
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
