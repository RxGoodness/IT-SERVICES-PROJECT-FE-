import React, { useEffect, useReducer } from "react";
import adminReducer from "./Reducer";

export const AuthContext = React.createContext<any>({});

type AuthContextProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = (props: AuthContextProps) => {
  const [user, dispatch] = useReducer(adminReducer, "", () => {
    const localData = localStorage.getItem("token");
    return localData ? JSON.parse(localData) : null;
  });
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(user));
  }, [user]);

  if (user) {
    console.log("user", user);
  } else {
    console.log("user is null ");
  }

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};
