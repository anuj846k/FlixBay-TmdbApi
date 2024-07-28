import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 w-full h-full bg-[#1F1E24] ">
      {data.map((c, i) => (
        <Link key={i} className="w-[300px] h-[450px] bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
          <img
            className="w-full h-3/4 object-cover"
            src={`https://image.tmdb.org/t/p/original${c.profile_path || c.backdrop_path}`}
            alt="poster image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold text-white text-center">{c.name || c.title || c.original_name || c.original_title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
