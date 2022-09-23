import axios from "axios";
import React, { createContext } from "react";

export const BASE_URL = "https:123123123";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const register = (name, email, password) => {
  //   axios
  //     .post(`${BASE_URL}/register`, {
  //       name,
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       let userInfo = res.data;
  //       console.log(userInfo);
  //     })
  //     .catch((e) => {
  //       console.log(`register error ${e}`);
  //     });
  // };
  return (
    <AuthContext.Provider value={register}>{children}</AuthContext.Provider>
  );
};
