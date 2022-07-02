import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();

const AuthModalProvider = ({ children }) => {
  const [authModalOpened, setAuthModalOpned] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        authModalOpened,
        setAuthModalOpned,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

const useAuthModal = () => useContext(AuthModalContext);
export { AuthModalProvider, useAuthModal };
