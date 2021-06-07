import React from "react";
import {
  ErrorBtn,
  ErrorContent,
  ErrorTitle,
  ErrorWrapper,
} from "./ErrorComponent.styles";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();

  return (
    <>
      <ErrorWrapper>
        <ErrorTitle>Oops!</ErrorTitle>
        <ErrorContent>We can't find the page you're looking for.</ErrorContent>
        <ErrorBtn onClick={() => history.push("/")}>Visit homepage</ErrorBtn>
      </ErrorWrapper>
    </>
  );
};

export default ErrorPage;
