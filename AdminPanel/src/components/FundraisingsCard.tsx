import { Button } from "@mui/material";
import logo from "../assets/Check.svg";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useApproveDeclineFundraisingMutation } from "../store/api/fundraisingApi";
import { FundraisingApproveDeclineRequest } from "../Models/FundraisingApproveDeclineRequest";

interface FundRaisingCardProps {
    method: (s: FundraisingApproveDeclineRequest) => void
  id: string;
  title: string;
  type: string;
  goal: number;
  company: string;
  description: string;
  Url: string;
}

const FundraisingCard: React.FC<FundRaisingCardProps> = ({
    method,
  id,
  Url,
  type,
  company,
  description,
  goal,
  title,
}) => {
  const [full, setFull] = useState<boolean>(false);
  const onAcceptFundraising = () => {
    method({ newsStatus: 1, fundraisingId: id });
  };

  const onDeclineFundraising = () => {
    method({ newsStatus: 2, fundraisingId: id });
  };
  const onSetFullHandler = () => {
    setFull(!full);
  };
  return (
    <div className=" flex">
      <div
        className={`${
          !full
            ? "w-[566px] bg-[#2F2F30] rounded-[63px]"
            : "w-[566px] bg-[#2F2F30] rounded-[23px]"
        } `}
      >
        <div className={`${!full ? "flex justify-between px-10 py-4": "flex justify-between px-10 pt-4"}`}>
          <h1 className=" text-white"><strong>{title}</strong></h1>{" "}
          {!full ? (
            <button onClick={onSetFullHandler}>
              <KeyboardArrowDownIcon />
            </button>
          ) : (
            <button onClick={onSetFullHandler}>
              <KeyboardArrowUpIcon />
            </button>
          )}
        </div>
        <div className={!full ? "hidden" : "flex flex-col text-white ml-10 gap-2 pb-4"}>
          <div className="flex">
            <h1 className="mr-4">URL</h1> <a href={Url}>reference</a>
          </div>
          <h1>Type {type}</h1>
          <h1>Sum of Goal {goal}</h1>
          <h1>Fundraising Company {company}</h1>
          <h1>Description {description}</h1>
        </div>
      </div>
      <div className=" w-[95px] flex justify-between self-center ml-4">
        <button
          onClick={onAcceptFundraising}
          className=" w-[36px] h-[36px] rounded-[50%] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] flex justify-center items-center "
        >
          <img className="  w-[20px] h-[20px]" src={logo} />
        </button>
        <button
          onClick={onDeclineFundraising}
          className="w-[36px] h-[36px] flex justify-center items-center bg-white rounded-[50%]"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default FundraisingCard;
