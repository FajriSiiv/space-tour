import React from "react";
import styled from "styled-components";
import Moon from "../img/planets/moon-bg.png";
import LangitMalam from "../img/langit-malam1.jpg";
import Planets from "../data/data.json";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80vh;
  padding: 15px 60px;
  display: flex;
  justify-content: space-between;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 100vh;
    background: url(${LangitMalam});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background-position: center;
    box-shadow: -161px -17px 400px 128px rgba(0, 0, 0, 0.67) inset;
  }
`;

const Left = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  text-align: center;
  & img {
    width: 400px;
    height: 350px;
    object-fit: contain;
  }
`;
const DetailName = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 40px;
  letter-spacing: 8px;
  color: #ced4da;
  span {
  }
`;
const Right = styled.div`
  flex: 1;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 50px;
`;

const Nav = styled.div`
  margin-bottom: 23px;
  a {
    margin: 0 8px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
  }
`;
const Title = styled.h1`
  font-size: 80px;
  font-weight: 300;
  font-family: "Bitter";
  letter-spacing: 5px;
  margin-bottom: 20px;
`;

const Desc = styled.span`
  width: 75%;
  text-align: justify;
  padding-bottom: 25px;
  position: relative;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #495057;
  }
`;

const ContainerDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Display = styled.div`
  flex: 1;
`;

const Detail = styled.span`
  letter-spacing: 2px;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 13px;
`;

const Number = styled.h5`
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export default function Destination() {
  const pData = Planets.nasa;
  return (
    <Container>
      <Left>
        <DetailName>
          {" "}
          <span>01</span> pick your destination
        </DetailName>
        <img src={Moon} alt="moon" />
      </Left>
      <Right>
        <ContainerRight>
          <Nav>
            {pData.map(id => {
              return (
                <Link key={id.id} to={"/destination/" + id.name}>
                  {id.name}
                </Link>
              );
            })}
          </Nav>
          <Title>MOON</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat error vitae ad labore
            earum exercitationem neque qui et.
          </Desc>
          <ContainerDetail>
            <Display>
              <Detail>AVG.Distance</Detail>
              <Number>225 Mil.KM</Number>
            </Display>
            <Display>
              <Detail>EST. Travel Time</Detail>
              <Number>13 Month</Number>
            </Display>
          </ContainerDetail>
        </ContainerRight>
      </Right>
    </Container>
  );
}
