import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../store/reducer";

type hocProp = {
  component: ReactJSXElement;
};

export function IsLoggedin(props: hocProp) {
  const { email } = useSelector((state: RootState) => state.user);
  return email ? props.component : <Navigate to="/" />;
}

export function IsNotLoggedin(props: hocProp) {
  const { email } = useSelector((state: RootState) => state.user);
  return email ? <Navigate to="/main" /> : props.component;
}
