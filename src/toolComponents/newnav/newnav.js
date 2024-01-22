import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: auto 30%;
  background-color: rgba(227, 227, 227, 0.47);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 30px;
  position: sticky;
  top: 20px;
  z-index: 100;
`;

const Buttons = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
`;
const Newnav = () => {
  return (
    <Container>
      <Link to="#intro">
        <Buttons>Home</Buttons>
      </Link>
      <Link to="#about">
        <Buttons>About</Buttons>
      </Link>

      <Link to="#skills">
        <Buttons>Skills</Buttons>
      </Link>
      <Link to="#resume">
        <Buttons>Resume</Buttons>
      </Link>
      <Link to="#awards">
        <Buttons>Awards</Buttons>
      </Link>
    </Container>
  );
};

export default Newnav;
