import React from "react";
import Database from "../data/crew.js";
import styled from "styled-components";
import "../css/carousel.css";
import Slider from "react-slick";
import "../css/carousel.css";
import bg from "../img/astronot-terbang.jpg";

const Container = styled.div`
  padding: 25px 80px;
  display: flex;
  flex-direction: column;
  height: 80vh;
  &::before {
    content: "";
    position: absolute;
    background: url(${bg});
    background-position: center -500px;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;

const Title = styled.h1`
  flex: 0.2;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 25px;
  letter-spacing: 3px;
  & span {
  }
`;

// const DisplayCarousel = styled.div`

// `;

const Display = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

const Text = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & h4 {
    font-size: 23px;
    font-weight: 250;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  & h1 {
    padding: 10px 0 20px 0;
    font-size: 40px;
    font-weight: 350;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  & p {
    font-size: 14px;
    text-align: justify;
    width: 60%;
  }
`;

const Kotak = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

export default function Crew() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const FillData = Database.crew;
  console.log(FillData);

  return (
    <Container>
      <Title>
        <span>02</span> meet your crew
      </Title>
      <Slider {...settings}>
        {FillData.map(data => {
          return (
            <div key={data.id}>
              <Display>
                <Text>
                  <h4>{data.job}</h4>
                  <h1>{data.name}</h1>
                  <p>{data.desc}</p>
                </Text>
                <Kotak>
                  <Image src={data.img} alt="crew" />
                </Kotak>
              </Display>
            </div>
          );
        })}
      </Slider>
    </Container>
  );
}
