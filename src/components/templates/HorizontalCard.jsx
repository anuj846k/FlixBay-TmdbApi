const HorizontalCard = ({ data }) => {
  return (
    <div className="w-[100%]  flex overflow-y-hidden mb-5 p-5 scroll-smooth gap-4">
      {data.map((item, index) => (
        <div key={index} className="min-w-[20%] bg-zinc-900 mr-5 mb-5 shadow-lg overflow-hidden rounded-lg">
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              item.backdrop_path || item.profile_path
            }`}
            alt=""       
          />
          <div className="text-white p-4">
            <h1 className="text-lg mb-2 font-semibold">
              {item.name || item.original_name || item.original_title}
            </h1>
            <p className="text-sm text-zinc-300">
              {item.overview.slice(0, 50)}...
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
