import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateFundraisingModel } from "../../Models/FundraisingModel";
import { Response } from "../../Models/Fundraisingsresponse";
import { FundraisingApproveDeclineRequest } from "../../Models/FundraisingApproveDeclineRequest";

export const fundraisingApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://b001-46-211-5-106.ngrok-free.app/api/Fundraising/",
  }),
  reducerPath: "fundraising/api",
  endpoints: (build) => ({
    setFundraising: build.mutation<any, CreateFundraisingModel>({
      query: (fundraising) => ({
        url: "UploadFundrasing",
        body: fundraising,
        method: "POST",
      }),
    }),
    getUnapprovedFundraisings: build.query<FundraisingGetModel[], void>({
      query: () => ({
        url: "GetAllPendingFundraising",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }),
      transformResponse: (res: Response) => res.fundraisingList,
    }),
    ApproveDeclineFundraising: build.mutation<any, FundraisingApproveDeclineRequest>({
        query: (item) => ({url: "ApproveDeclineFundraising", method: "PUT", body: item}),

    })
  }),
});

export const { useSetFundraisingMutation, useGetUnapprovedFundraisingsQuery, useApproveDeclineFundraisingMutation } =
  fundraisingApi;
