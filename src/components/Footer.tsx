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

const Footer = () => {
  return (
    <Container>
      <div>Footer</div>
    </Container>
  );
};

export default Footer;
