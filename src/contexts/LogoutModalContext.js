import { createContext, useContext, useState } from "react";

const LogoutModalContext = createContext();

const LogoutModalProvider = ({ children }) => {
  const [logoutModalOpened, setLogoutModalOpened] = useState(false);

  return (
    <LogoutModalContext.Provider
      value={{
        logoutModalOpened,
        setLogoutModalOpened,
      }}
    >
      {children}
    </LogoutModalContext.Provider>
  );
};

const useLogoutModal = () => useContext(LogoutModalContext);
export { LogoutModalProvider, useLogoutModal };
