import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  color: white;
  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: black;
    z-index: -1;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <h1>404-Page</h1>
    </Container>
  );
}
