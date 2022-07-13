import { useCallback } from "react";
import Signin from "../components/Signin";
import { LoginReqType } from "../types";

export const SigninContainer = () => {
  const login = useCallback((reqData: LoginReqType) => {}, []);

  return <Signin login={login} />;
};
