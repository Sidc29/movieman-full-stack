import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackupImage from "../assets/images/backup.png";

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
    import.meta.env.VITE_REACT_APP_API_KEY
  }`;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setMovie(jsonData);
    };
    fetchMovie();
  }, [params.id]);

  return (
    <div className="flex flex-row max-w-7xl mx-auto max-sm:flex-col max-md:flex-col my-8">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${BackupImage}`
        }
        alt={movie.poster_path}
        className="max-w-7xl rounded-md mx-16"
      />
      <div className="flex flex-col mx-6">
        <span className="text-4xl font-bold max-sm:text-center max-md:text-center mt-5 dark:text-slate-100">
          {movie.title}
        </span>
        <span className="my-5 text-lg dark:text-slate-100 ">
          {movie.overview}
        </span>
        <div className="flex flex-wrap gap-3 my-1">
          {movie.genres
            ? movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="p-2 border rounded-md text-lg dark:text-slate-100 dark:border-gray-600"
                >
                  {genre.name}
                </span>
              ))
            : ""}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center mb-2 mt-6 text-lg">
            <i className="fa-solid fa-star text-yellow-500"></i>
            <span className="mx-2  dark:text-slate-100">
              {movie.vote_average}
            </span>
            <span className=" dark:text-slate-100">-</span>
            <span className="mx-2 dark:text-slate-100">
              {movie.vote_count} reviews
            </span>
          </div>
          <span className="my-2 text-lg dark:text-slate-100">
            <strong>Runtime</strong>: {movie.runtime} min.
          </span>
          <span className="my-2 text-lg dark:text-slate-100">
            <strong>Budget</strong>: ${movie.budget}
          </span>
          <span className="my-2 text-lg dark:text-slate-100">
            <strong>Revenue</strong>: ${movie.revenue}
          </span>
          <span className="my-2 text-lg dark:text-slate-100">
            <strong>Release Date</strong>: {movie.release_date}
          </span>
          <span className="my-2 text-lg dark:text-slate-100">
            <strong>IMDB Code</strong>: {movie.imdb_id}
          </span>
        </div>
      </div>
    </div>
  );
};
