import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userStorage = localStorage.getItem("user_db");
    if (userStorage && userToken) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser[0]);
    }
  }, []);
  const signin = (email, password) => {
    const userStorage = JSON.parse(localStorage.getItem("users_db"));

    const hasUser = userStorage?.filter((user) => user.email == email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("");
      }
    }
  };
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
