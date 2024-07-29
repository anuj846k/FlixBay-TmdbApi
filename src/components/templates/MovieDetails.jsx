import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncLoadMovie, removeMovie } from "../../store/actions/movieActions";
import Loading from "../Loading";

const MovieDetails = () => {
  const { info } = useSelector((state) => state.movie);
  console.log("Info:", info);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  return info ? (
    <div
      className="w-screen h-screen px-[10%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original${
          info.details.backdrop_path || info.details.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* part-1 Navigation ending */}
      <nav className="w-full text-zinc-100 flex h-[10vh] gap-10 text-2xl mt-5">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
        ></Link>
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill hover:text-[#6556CD]"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="hover:text-[#6556CD] ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="hover:text-[#6556CD]"
        >
          imdb
        </a>
      </nav>

      {/* part-2 Movie poster and details */}

      <div className="w-full flex ">
        <img
          className=" h-[40vh] rounded-md object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt="poster image"
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
