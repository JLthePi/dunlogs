import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 2rem;
`;

const SearchBar = styled.input`
  height: 2rem;
  width: 5rem;
`;

const Home = () => {
  return (
    <React.Fragment>
      <Logo>Dunlogs</Logo>
      <SearchBar />
    </React.Fragment>
  );
};

export default Home;
