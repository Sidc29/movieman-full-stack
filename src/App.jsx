import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
};
