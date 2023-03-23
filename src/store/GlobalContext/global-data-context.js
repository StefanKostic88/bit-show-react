import { createContext } from "react";

export const GlobalDataContext = createContext({
  oppenShowDetails: () => {},
});

export const GlobalContextWraper = ({ children, contextValue }) => {
  return (
    <GlobalDataContext.Provider value={contextValue}>
      {children}
    </GlobalDataContext.Provider>
  );
};
