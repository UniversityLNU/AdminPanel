import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const HomePage = () => {
  return (
    <div className="flex relative h-screen justify-center">
      <div className="  bg-black w-1/2 border-r-2 border-white z-0 flex justify-center items-start pt-[545px]">
        <Button className=" rounded-[65px] bg-[#2F2F30] px-[82px] py-[20px] text-white">
          <Link to={"createFundraising"}>I`m a User</Link>
        </Button>
      </div>
      <div className=" bg-black w-1/2 border-l-2 border-white z-0 flex justify-center items-start pt-[545px]">
        <Button className=" rounded-[65px] bg-[#2F2F30] px-[82px] py-[20px] text-white">
          <Link to={"login"}>I`m a Admin</Link>
        </Button>
      </div>
      <div className="absolute z-20 w-full flex flex-col items-center top-[78px] gap-[40px]">
      <div className="  w-[219px] h-[219px] top-[78px]  rounded-[50%] border-2 text-white bg-black flex justify-center items-center">
        <img src={logo} className=" rounded-[50%]"/>
      </div>
      <div className=" text-white bg-black text-[41px]">Welcome back!</div>
      </div>
    </div>
  );
};

export default HomePage;
