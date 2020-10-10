/* eslint-disable import/prefer-default-export */
import React, { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ApplicationUserApi, getApiUrl, UserDto } from "../../api-clients/api";
import { setuid } from "process";

export const SESSION_STORAGE_USER_KEY = "token";

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [sessionUser, setSessionUser] = useState<string | null>(localStorage.getItem(SESSION_STORAGE_USER_KEY));
  const [applicationUserApi] = useState<ApplicationUserApi>(
    new ApplicationUserApi(getApiUrl())
  );
  const [user, setUser] = useState<UserDto | undefined>(
    undefined
  );

  const isAuthenticated = sessionUser != null;

  const logout = () => {
    setUser(undefined);
    localStorage.removeItem(SESSION_STORAGE_USER_KEY);
    setSessionUser(null);
  };

  const login = (token : string) => {
    setUser(undefined);
    localStorage.setItem(SESSION_STORAGE_USER_KEY, token);
    setSessionUser(token);
  };

  useEffect(() => {
    if (!user && sessionUser) {
      applicationUserApi.userProfile().then(res => {
        setUser(res);
      })
      .catch(err => {
        console.log(err)
      })
    }

  }, [user, sessionUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        logout,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
