import React, {
   useState,
   useContext,
   createContext,
   useEffect,
} from "react";

// export const authContext = createContext<IAuth | undefined>(undefined);
const authContext = createContext();

//provider component that wraps the app and makes auth object ...
//...available to any child component that calls seAuth()

export const AuthProvider = ({ children }) => {

   return (
      <authContext.Provider value={useProvideAuth()}>
         {children}
      </authContext.Provider>
   );
};

// Hook r child components to get the auth object ...
//... and re-render when it changes.
export const useAuth = () => {
   return useContext(authContext);
};

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
   const [loggedIn, setLoggedIn] = useState(false);

   const login = () => {
      setLoggedIn(true);
   };

   const logout = () => {
      setLoggedIn(false);
   };
   const signup = () => {
      setLoggedIn(true);
   };

   // Return the accessToken and auth methods
   return {
      loggedIn,
      login,
      logout,
      signup,
   };
};
export default AuthProvider;
