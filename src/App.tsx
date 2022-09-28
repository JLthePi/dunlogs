import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Char from "./pages/Char";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <React.Fragment>
      <Reset />
      <BrowserRouter>
        <Container>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/char" element={<Char />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
