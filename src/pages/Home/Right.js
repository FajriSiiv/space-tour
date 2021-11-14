import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Display = styled.div``;

const Linked = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-transform: uppercase;
  font-size: 30px;
`;

const Right = () => {
  return (
    <Container>
      <Display>
        <Link to="/destination">
          <Linked>explore</Linked>
        </Link>
      </Display>
    </Container>
  );
};

export default Right;
