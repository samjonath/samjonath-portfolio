import { Reac, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

import newProPic from "../../assets/images/intro-pic.png";

const IntroComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0;
`;
const ProfilePhoto = styled.img`
  width: 25%;
`;
const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h2`
  font-size: 6vw;
  margin: 0;
`;
const Desig = styled.h3`
  background-color: #352f44;
  width: fit-content;
  font-size: 2vw;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0;
  color: white;
`;
const Intro = () => {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    // card.style.backgroundColor = "transparent";
    const boundingRect = card.getBoundingClientRect();

    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;

    const translateX = (offsetX / boundingRect.width - 0.5) * 30;
    const translateY = (offsetY / boundingRect.height - 0.5) * 30;

    card.style.transition = "transform 0.2s ease-out"; // Add a smooth transition

    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
  };
  const handleMouseMoveExtra = (event) => {
    const card = event.currentTarget;
    // card.style.backgroundColor = "transparent";
    const boundingRect = card.getBoundingClientRect();

    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;

    const translateX = (offsetX / boundingRect.width - 0.5) * 50;
    const translateY = (offsetY / boundingRect.height - 0.5) * 50;

    const rotateY = (offsetX / boundingRect.width - 0.5) * 15;
    const rotateX = (0.5 - offsetY / boundingRect.height) * 15;

    card.style.transition = "transform 0.5s ease-out"; // Add a smooth transition
    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.07) rotateX(${rotateX}deg) 
              rotateY(${rotateY}deg)`;
    card.style.borderRadius = "10px";
    card.style.marginRight = "1rem";
  };
  const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    // card.style.backgroundColor = "transparent";
    card.style.transition = "transform 0.3s ease-in-out";
    card.style.transform = "none";
  };
  const handleMouseLeaveExtra = (event) => {
    const card = event.currentTarget;
    card.style.transition = "transform 0.3s ease-in-out";
    card.style.transform = "none";
    // card.style.backgroundColor = "transparent";
    card.style.padding = "0rem";
    card.style.color = "black";
    card.style.marginRight = "0rem";
    card.style.boxShadow = "none";
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <IntroComp id="intro">
      <ProfilePhoto
        src={newProPic}
        onMouseMove={handleMouseMoveExtra}
        onMouseLeave={handleMouseLeaveExtra}
        data-aos="zoom-in"
      ></ProfilePhoto>
      <NameSpace onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Name data-aos="zoom-in">SAM JONATH</Name>
        <Desig data-aos="zoom-in">Full Stack Developer | AI/ML engineer</Desig>
      </NameSpace>
    </IntroComp>
  );
};

export default Intro;
