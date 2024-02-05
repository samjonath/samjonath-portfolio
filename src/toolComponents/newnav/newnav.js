import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IconHome2 } from "@tabler/icons-react";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Container = styled.div`
  height: 100%;
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin: auto 35vw;
  background-color: rgba(227, 227, 227, 0.4);
  backdrop-filter: blur(8.3px);
  -webkit-backdrop-filter: blur(8.3px);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
  border-radius: 30px;
  position: sticky;
  top: 20px;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    margin: auto 25vw;
    top: 0.5rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin: auto 30vw;
  }
`;

const Buttons = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  font-size: 1vw;
  &.home {
    background-color: black;
    color: white;
    border-radius: 50%;
    position: absolute;
    height: 5rem;
    width: 5rem;
    opacity: 0.7;
  }
  @media only screen and (max-width: 600px) {
    &.home {
      height: 3rem;
      width: 3rem;
    }
    font-size: 2vw;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    &.home {
      height: 3.5rem;
      width: 3.5rem;
    }
    font-size: 2vw;
  }
`;
const Newnav = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);
  let navigate = useNavigate();
  const RouteProject = () => {
    let path = `/projects`;
    navigate(path);
  };
  const RouteHome = () => {
    let path = `/`;
    navigate(path);
  };
  const RouteContact = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <Container>
      <Buttons onClick={RouteProject}>Projects</Buttons>
      <Buttons className="home" onClick={RouteHome}>
        <IconHome2 size={"3vw"} />
      </Buttons>
      <Buttons onClick={RouteContact}>Contact</Buttons>
    </Container>
  );
};

export default Newnav;
