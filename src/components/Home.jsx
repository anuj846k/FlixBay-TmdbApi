import axios from "../utils/axios";
import Header from "./templates/Header";
import Sidebar from "./templates/Sidebar";
import Topnav from "./templates/Topnav";
import HorizontalCards from "./templates/HorizontalCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      setTrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  console.log("tre",trending)

  useEffect(() => {
    !wallpaper && GetWallpaper();
    !trending && GetTrending();
  }, []);

  return wallpaper && trending ? (
    ((document.title = "Flixbay | Home"),
    (
      <>
        <Sidebar />
        <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
          <Topnav />
          <Header data={wallpaper} />
          <HorizontalCards data={trending} />
        </div>
      </>
    ))
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
