import React from "react";

const HorizontalCard = ({ data }) => {
  return (
    <div className="w-full  p-5">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
      </div>

      <div className="w-[100%]  flex overflow-y-hidden ">
        {data.map((item, index) => (
          <div key={index} className="min-w-[20%] bg-zinc-900 mr-5 mb-5">
            <img
            className="w-full h-[45%] object-cover"
              src={`https://image.tmdb.org/t/p/original${
                item.backdrop_path || item.profile_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[65%] mb-5">
                <h1 className="text-xl font-semibold">{item.name||item.original_name || item.original_title}</h1>
                <p>{item.overview.slice(0,50)}...
                    <span className="text-zinc-500">more</span>
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCard;
