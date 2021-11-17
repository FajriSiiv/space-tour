import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";
import styled from "styled-components";
import NotFound from "./NotFound";
import Mars from "./pages/planets/Mars";
import Mercury from "./pages/planets/Mercury";
import Jupiter from "./pages/planets/Jupiter";
import Crew from "./pages/Crew";
import Technology from "./pages/technology/Technology";
const Container = styled.div`
  * {
    transition: 0.3s all;
    a {
      text-decoration: none;
      color: white;
      &:hover {
        color: lightcoral;
      }
    }
  }
  max-width: 1440px;
  margin: auto;
  min-height: 100vh;
  position: relative;
  color: white;
`;

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/moon" element={<Destination />} />
          <Route path="/destination/mars" element={<Mars />} />
          <Route path="/destination/mercury" element={<Mercury />} />
          <Route path="/destination/jupiter" element={<Jupiter />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
