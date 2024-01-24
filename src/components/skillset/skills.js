import React from "react";
import styled from "styled-components";

const SkillsEntity = styled.div`
  padding: 3px 10px;
  margin: 5px;
  background-color: #352f44;
  color: white;
  border-radius: 5px;
  border: 2px solid #376fb6;
  box-shadow: 0 2px 3px #0000003;
`;

const Skills = (props) => {
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
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
    card.style.transition = "transform 0.3s ease-in-out";
    card.style.transform = "none";
  };
  const handleMouseLeaveExtra = (event) => {
    const card = event.currentTarget;
    card.style.transition = "transform 0.3s ease-in-out";
    card.style.transform = "none";
    card.style.padding = "0rem";
    card.style.color = "black";
    card.style.marginRight = "0rem";
    card.style.boxShadow = "none";
  };
  return (
    <SkillsEntity onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {props.value}
    </SkillsEntity>
  );
};

export default Skills;
