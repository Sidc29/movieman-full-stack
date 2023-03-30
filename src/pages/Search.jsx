import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useTitle } from "../hooks/";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm);

  const pageTitle = useTitle(`Search results for ${queryTerm}`);

  return (
    <>
      <div className="flex max-w-[80%] mx-auto my-10 items-center">
        {movies.length > 0 ? (
          <h1 className="text-3xl font-medium mx-auto dark:text-white">{`Results for '${queryTerm}'`}</h1>
        ) : (
          <h1 className="text-3xl font-medium mx-auto dark:text-white">{`No results found for '${queryTerm}'`}</h1>
        )}
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-wrap lg:justify-start md:justify-evenly max-lg:jus sm:justify-center max-sm:m-3">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
