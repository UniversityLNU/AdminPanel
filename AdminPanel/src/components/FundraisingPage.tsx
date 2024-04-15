import {
  Button,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSetFundraisingMutation } from "../store/api/fundraisingApi";
import { CreateFundraisingModel } from "../Models/FundraisingModel";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from '@mui/icons-material/Check';
import logo from "../assets/Check.svg"
import logo1 from "../assets/logo.png"

const FundRaisingPage = () => {
  const [method, { data }] = useSetFundraisingMutation();
  const [page, setPage] = useState<boolean>(false);
  const [formSubmited, setFormSubmited] = useState<boolean>();
  const submitFormHandler = () => {
    console.log(form);
    method(form);
    console.log(data);
    setFormSubmited(true);
  };
  const initFormState: CreateFundraisingModel = {
    userName: "",
    title: "",
    description: "",
    email: "",
    fundraisingCompany: "",
    fundraisingType: "Medical",
    fundraisingUrl: "",
    goal: 0,
    phoneNumber: "",
    status: 0,
  };
  const [form, setForm] = useState<CreateFundraisingModel>(initFormState);
  const onTitleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.title = event.target.value;
      return prev;
    });
  };
  const onFundraisingUrlChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.fundraisingUrl = event.target.value;
      return prev;
    });
  };
  const onUserNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.userName = event.target.value;
      return prev;
    });
  };
  const onDescriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.description = event.target.value;
      return prev;
    });
  };
  const onGoalChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.goal = +event.target.value;
      return prev;
    });
  };
  const onFundraisingCompanyChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.fundraisingCompany = event.target.value;
      return prev;
    });
  };
  const onPhoneNumberChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.phoneNumber = event.target.value;
      return prev;
    });
  };
  const onEmailChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => {
      prev.email = event.target.value;
      return prev;
    });
  };
  const onFundraisingTypeChangeHandler = (event: SelectChangeEvent) => {
    setForm((prev) => {
      prev.fundraisingType = event.target.value;
      return prev;
    });
  };

  const onNextClickHandler = () => {
    setPage(!page);
  };

  return (
    <div className=" bg-black w-full h-screen flex flex-col items-center pt-[99px]">
      <div className="  w-[219px] h-[219px] top-[78px]  rounded-[50%] border-2 text-white bg-black flex justify-center items-center">
        <img src={logo1} className=" rounded-[50%]"/>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" flex gap-1 justify-center my-6">
          <div
            className={`${
              !page
                ? "w-[20px] h-[20px] bg-[#D9D9D9] rounded-[50%]"
                : "w-[20px] h-[20px] border-[1px] rounded-[50%]"
            }`}
          ></div>
          <div className=" w-[56px] h-[1px] border-white border-[1px] self-center"></div>
          <div
            className={`${
              !page
                ? "w-[20px] h-[20px] border-[1px] rounded-[50%]"
                : "w-[20px] h-[20px] bg-[#D9D9D9] rounded-[50%]"
            } w-[20px] h-[20px]  rounded-[50%] border-[1px]`}
          ></div>
        </div>
        <div
          className={`${
            formSubmited ? "hidden" : "flex flex-col items-center"
          }`}
        >
          <div className={`${page ? "hidden" : "flex flex-col gap-6 mb-6"}`}>
            <input
            onChange={onUserNameChangeHandler}
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white "
              placeholder="Enter your name"
            />
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white "
              onChange={onEmailChangeHandler}
              placeholder="Enter your email"
            />
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white  "
              onChange={onPhoneNumberChangeHandler}
              placeholder="Enter your phone number"
            />
          </div>
          <div className={`${!page ? "hidden" : "flex flex-col gap-4 mb-4"}`}>
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              onChange={onTitleChangeHandler}
              placeholder="Enter title for fundraiser"
            />
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              onChange={onFundraisingUrlChangeHandler}
              placeholder="FundraisingUrl"
            />
            <Select
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              value={form.fundraisingType}
              onChange={onFundraisingTypeChangeHandler}
              label="FundraisingType"
            >
              <MenuItem value="Medical">Medical</MenuItem>
              <MenuItem value="Clothes">Clothes</MenuItem>
              <MenuItem value="Equipment">Equipment</MenuItem>
              <MenuItem value="Army">Army</MenuItem>
            </Select>
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              onChange={onDescriptionChangeHandler}
              placeholder="Enter description*"
            />
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              onChange={onGoalChangeHandler}
              placeholder="Enter sum of your goal"
              type="number"
            />
            <input
              className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[50px] pl-8 text-white  "
              onChange={onFundraisingCompanyChangeHandler}
              placeholder="FundraisingCompany"
            />
          </div>

          <Button
            className={`${
              !formSubmited
                ? "rounded-[101px] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] w-fit text-white py-[13px] px-[41px]"
                : "hidden"
            } `}
            onClick={!page ? onNextClickHandler : submitFormHandler}
          >
            {!page ? "Next Step" : "Create a fundraiser"} <ArrowForwardIcon />
          </Button>
        </div>
      </div>
      <div
        className={`${
          formSubmited
            ? "w-[515px] h-[400px] rounded-[30px] bg-[#2F2F30] flex flex-col justify-center items-center text-white gap-5 text-[24px]"
            : "hidden"
        }`}
      >
        <h1 className="block text-center">Your request to buy this item <br/><strong> has been sent</strong>.</h1>
        <div className=" w-[98px] h-[98px] rounded-[50%] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] flex justify-center items-center "><img src={logo}/></div>
        <h1 className="block text-center">Please<strong> check your email</strong> for<br/> further details.</h1>
      </div>
    </div>
  );
};

export default FundRaisingPage;
