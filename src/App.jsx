import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./components/Context";
import Loader from "./components/loader/Loader";
import { loaderAnimation } from "./helpers/loaderAnimation";
import { mousecursor } from "./helpers/mouseCursor";
import { revealWords } from "./helpers/revealWord";
import { Clients } from "./pages/clients";

import { Error } from "./pages/error";

const Home = lazy(() => import("./pages/home"));
const Layout = lazy(() => import("./pages/layout"));

function App() {
  const { setLoaderEnd } = useGlobalContext();

  useEffect(() => {
    revealWords();
    loaderAnimation();
    mousecursor();

    setTimeout(() => {
      setLoaderEnd(true);
    }, 20000);
  }, []);

  return (
    <>
      <Loader />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/clients/:id" element={<Clients />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
