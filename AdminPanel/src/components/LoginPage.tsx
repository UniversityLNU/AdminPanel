import { Button } from "@mui/material";

const LoginPage = () => {
  return (
    <div className=" bg-black w-full h-screen flex flex-col items-center pt-[99px] gap-12">
      <div className="  w-[219px] h-[219px] top-[78px]  rounded-[50%] border-2 text-white bg-black flex justify-center items-center">
        <h1 className="text-[27px]">Logo</h1>
      </div>
      <input
        className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white "
        placeholder="Enter your login"
      />
      <input
        type="password"
        className=" bg-[#2F2F30] rounded-[63px]  w-[500px] h-[66px] pl-8 text-white "
        placeholder="Enter your password"
      />
      <Button className="rounded-[101px] bg-gradient-to-r from-[#ABAAFC] to-[#7978F7] w-fit text-white py-[13px] px-[41px]">Sign In</Button>
    </div>
  );
};

export default LoginPage;
