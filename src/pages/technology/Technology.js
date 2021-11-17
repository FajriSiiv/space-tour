import React from "react";
import styled from "styled-components";
import DataTech from "../../data/technology";
import img1 from "../../img/technology/img-3.jpg";

const Container = styled.div`
  padding: 30px 100px;
  height: 75vh;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    background: black;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Display = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    height: 70px;
    width: 70px;
    padding: 10px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid white;
    margin: 10px 0;
    cursor: pointer;
  }

  flex: 1;
`;

const Text = styled.div`
  flex: 4;
  & span {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
  }
  & h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 40px;
    font-family: "Bitter";
  }
  & p {
    font-size: 13px;
    width: 60%;
    text-align: justify;
  }
`;

const Cont = styled.div`
  flex: 3;
  text-align: right;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

export default function Technology() {
  const dataT = DataTech.tech;
  return (
    <Container>
      <Title>03 Technology</Title>
      <Display>
        <Number>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Number>
        <Text>
          <span>the terminology</span>
          <h1>Lauch Rocket</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem odit,
            impedit vel quod adipisci id commodi laboriosam mollitia similique nesciunt dolor velit
            sequi at omnis magnam iusto hic.
          </p>
        </Text>
        <Cont>
          <Image src={img1} alt="img" />
        </Cont>
      </Display>
    </Container>
  );
}
