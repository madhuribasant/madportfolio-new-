import React, { useContext, useState, useRef, memo, useMemo } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [transition, setTransition] = useState(false);
  const [loaderEnd , setLoaderEnd] = useState(false)
  

  return (
    <AppContext.Provider value={{transition,
      setTransition,
      loaderEnd,
      setLoaderEnd}}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
