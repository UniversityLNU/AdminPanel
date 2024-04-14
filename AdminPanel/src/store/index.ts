import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {fundraisingApi} from "./api/fundraisingApi";
import { shopApi } from "./api/shopApi";

export const store = configureStore({
    reducer: {
        [fundraisingApi.reducerPath]: fundraisingApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (Default) => Default().concat(fundraisingApi.middleware).concat(shopApi.middleware)
})

export const useAppSelect: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export const useAppDispatch: () => typeof store.dispatch=useDispatch;