import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100vw;
  height: 4rem;
`;

const Navigation = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="char">Char</Link>
    </Container>
  );
};

export default Navigation;
