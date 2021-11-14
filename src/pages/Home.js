import React from "react";
import styled from "styled-components";
import Left from "./Home/Left";
import Right from "./Home/Right";
import earthImg from "../img/nasa-nebula.jpg";

const Container = styled.div`
  display: flex;
  padding: 0 100px;
  max-height: 80vh;
  height: 80vh;
  &::before {
    content: "";
    position: absolute;
    min-width: 100%;
    height: 100vh;
    background: url(${earthImg});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-position: center;
    top: 0;
    left: 0;
  }
`;

const Display = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 80px;
`;

export default function Home() {
  return (
    <Container>
      <Display>
        <Left />
      </Display>
      <Display>
        <Right />
      </Display>
    </Container>
  );
}
