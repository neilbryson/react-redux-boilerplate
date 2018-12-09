import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ErrorCode = styled("div")`
  font-weight: bold;
  font-size: 92px;
`;

const ErrorMessage = styled("div")`
  font-weight: 32px;
`;

const NotFoundView = () => (
  <Container>
    <ErrorCode>404</ErrorCode>
    <ErrorMessage>Page not found.</ErrorMessage>
  </Container>
);

export default NotFoundView;
