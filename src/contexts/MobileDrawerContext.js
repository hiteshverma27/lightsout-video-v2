import { createContext, useContext, useState } from "react";

const MobileDrawerContext = createContext();

const MobileDrawerProvider = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <MobileDrawerContext.Provider
      value={{
        sideNavOpen,
        setSideNavOpen
      }}
    >
      {children}
    </MobileDrawerContext.Provider>
  );
};

const useMobileDrawer = () => useContext(MobileDrawerContext);
export { MobileDrawerProvider, useMobileDrawer };