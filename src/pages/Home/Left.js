import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  text-transform: uppercase;
`;

const MediumText = styled.span`
  font-size: 22px;
  letter-spacing: 5px;
  font-weight: 300;
`;

const Space = styled.h1`
  font-size: 135px;
  font-family: "Bitter";
  font-weight: 400;
  letter-spacing: 3px;
`;

const MiniText = styled.p`
  width: 90%;
  text-transform: capitalize;
  font-size: 13px;
  text-align: justify;
`;

const Left = () => {
  return (
    <Container>
      <MediumText>so, you want to travel to</MediumText>
      <Space>Space</Space>
      <MiniText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident voluptas officia ab quos
        dignissimos nihil esse cum repellat sint? Inventore cumque voluptate ullam in tempore! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit.
      </MiniText>
    </Container>
  );
};

export default Left;
