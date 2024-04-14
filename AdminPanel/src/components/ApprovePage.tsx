import { Link } from "react-router-dom";
import { useGetUnapprovedFundraisingsQuery } from "../store/api/fundraisingApi";
import FundraisingCard from "./FundraisingsCard";

const ApprovePage = () => {
  const { data } = useGetUnapprovedFundraisingsQuery();
  
  return (
    <div className="flex flex-col gap-8">
      {data?.map((item, index) => (
        <FundraisingCard
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
  );
};

export default ApprovePage;
