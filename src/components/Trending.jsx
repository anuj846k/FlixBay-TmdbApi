import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[3%] w-screen h-screen">
      <div className="w-full flex items-center">
        <h1 className="text-3xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown title="Category" options={["movie", "tv", "all"]} func="" />
        <div className="w-[2%]"></div>
        <Dropdown title="Duraiton" options={["week", "day"]} func="" />
      </div>
    </div>
  );
};

export default Trending;
