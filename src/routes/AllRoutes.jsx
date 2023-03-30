import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, NotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <main className=" min-h-[90vh] dark:bg-[#1E293B]">
        <Routes>
          <Route
            path=""
            element={
              <MovieList apiPath="movie/now_playing" title="Now Playing" />
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route
            path="/popular"
            element={<MovieList apiPath="movie/popular" title="Popular" />}
          />
          <Route
            path="/top"
            element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
          />
          <Route
            path="/upcoming"
            element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
          />
          <Route path="/search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
