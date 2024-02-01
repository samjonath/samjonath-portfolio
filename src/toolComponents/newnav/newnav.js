import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { IconHome2 } from "@tabler/icons-react";
import Aos from "aos";
import "aos/dist/aos.css";

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
  font-size: 1vw;
`;
const Newnav = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
      <Buttons
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "50%",
          position: "absolute",
          height: "5VW",
          width: "5VW",
          opacity: "0.7",
        }}
        data-aos="zoom-in"
        onClick={RouteHome}
      >
        <IconHome2 size={25} />
      </Buttons>
      <Buttons onClick={RouteContact}>Contact</Buttons>
    </Container>
    // <Container>
    //   <Link to="#intro">
    //     <Buttons>Home</Buttons>
    //   </Link>
    //   <Link to="#about">
    //     <Buttons>About</Buttons>
    //   </Link>

    //   <Link to="#skills">
    //     <Buttons>Skills</Buttons>
    //   </Link>
    //   <Link to="#resume">
    //     <Buttons>Resume</Buttons>
    //   </Link>
    //   <Link to="#awards">
    //     <Buttons>Awards</Buttons>
    //   </Link>
    // </Container>
  );
};

export default Newnav;
