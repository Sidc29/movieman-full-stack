import { Card } from "../components";
import { useFetch, useTitle } from "../hooks";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);
  return (
    <div className="max-w-7xl mx-auto my-12 flex flex-wrap justify-start sm:justify-center max-sm:m-3">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
