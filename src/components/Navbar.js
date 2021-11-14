import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  height: fit-content;
  z-index: 99;
  overflow: hidden;
`;

const Logo = styled.div`
  flex: 1;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 75%;
    height: 1px;
    background: #adb5bd;
    right: 5%;
    top: 50%;
    z-index: 999;
  }
`;

const Portal = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
  position: relative;
  z-index: 10;
  margin: 15px 0;
  height: 65px;
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 65px;
    z-index: -1;
    background: rgba(190, 190, 190, 0.1);
    backdrop-filter: blur(20px);
  }
`;

const Display = styled.div`
  /* &::before {
    content: "";
    position: absolute;
    width: 8%;
    height: 2px;
    background: white;
    bottom: 0;
  } */
  a {
    &:hover {
      color: lightsteelblue;
    }
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Logo>LOGO</Logo>

      <Portal>
        <Display>
          <Link to="/">00 Home</Link>
        </Display>
        <Display>
          <Link to="/destination">01 Destination</Link>
        </Display>
        <Display>
          <Link to="/crew">02 Crew</Link>
        </Display>
        <Display>
          <Link to="/technology">03 Technology</Link>
        </Display>
      </Portal>
    </Container>
  );
}
