import PageNotFound from "../assets/images/PageNotFound.png";

export const NotFound = () => {
  return (
    <div className="flex flex-col max-w-7xl items-center mx-auto my-12">
      <h1 className="text-3xl font-bold my-5 dark:text-white">
        Oops! Looks like you're lost
      </h1>
      <img
        src={PageNotFound}
        alt="error image"
        className="w-[400px] h-[400px]"
      />
    </div>
  );
};
