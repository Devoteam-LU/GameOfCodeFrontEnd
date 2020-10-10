/* eslint-disable import/prefer-default-export */
import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types";

const SESSION_STORAGE_USER_KEY = "user";

const getUserFromSessionUser = (sessionUser: string | null) =>
  sessionUser ? (JSON.parse(sessionUser) as User) : undefined;

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const sessionUser = localStorage.getItem(SESSION_STORAGE_USER_KEY);
  const [user, setUser] = useState<User | undefined>(
    getUserFromSessionUser(sessionUser)
  );
  const isAuthenticated = !!user?.firstName;

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem(SESSION_STORAGE_USER_KEY);
  };

  useEffect(() => {
    if (!user && sessionUser) {
      setUser(getUserFromSessionUser(sessionUser));
    } else if (user) {
      localStorage.setItem(SESSION_STORAGE_USER_KEY, JSON.stringify(user));
    }
  }, [user, sessionUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
