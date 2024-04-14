import { Button } from "@mui/material";
import React from "react";
import { useApproveDeclineFundraisingMutation } from "../store/api/fundraisingApi";
import { useParams } from "react-router-dom";

const SpecificFundraising = () => {
    const fundraisingId = useParams()
    const [method] = useApproveDeclineFundraisingMutation();
    const onAcceptFundraising = () => {
        method({newsStatus: 1, fundraisingId: fundraisingId.userId!});
    }

    const onDeclineFundraising = () => {
        method({newsStatus: 2, fundraisingId: fundraisingId.userId!});
    }
  return (
    <>
      <h1>fsdfsdfdsf</h1>
      <Button onClick={onAcceptFundraising}>Accept</Button>
      <Button onClick={onDeclineFundraising}>Decline</Button>
    </>
  );
};

export default SpecificFundraising;
