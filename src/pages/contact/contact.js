import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Input, CloseButton, Textarea, Button } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import MacEmoji from "../../assets/images/macbook-iemoji.png";

import Intro from "../../components/intro/intro";
import Aos from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 6vw;
  margin-top: 3vw;
`;

const ContactContainer = styled.div``;
const NewCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin: 10vh 6vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  top: 14vh;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 50vh;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    flex-direction: column;
    height: 60vh;
  }
`;

const MacEmo = styled.img`
  width: 20vw;
  position: absolute;
  top: 92vh;
  right: 0vw;
  z-index: 0;
  @media only screen and (max-width: 600px) {
    top: 70vh;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    top: 92vh;
  }
`;

const GetInTouchTitle = styled.div``;
const GetInTouchForm = styled.div`
  width: 30vw;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: -webkit-fill-available;
    justify-content: left;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: -webkit-fill-available;
    justify-content: left;
    display: flex;
    flex-direction: column;
  }
`;
const GetInTouchTitle1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 2rem;
  }
`;
const GetInTouchTitle2 = styled.h3`
  margin: 0;
`;

const SubmitButton = styled.button``;

const Contact = () => {
  const [value, setValue] = useState("Clear me");
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
    <Container>
      <Intro />
      <NewCard data-aos="fade-up">
        <GetInTouchTitle>
          <GetInTouchTitle2>Want To Collabrate? </GetInTouchTitle2>
          <GetInTouchTitle1>Get In Touch</GetInTouchTitle1>
        </GetInTouchTitle>
        <GetInTouchForm>
          <Input placeholder="Your email" size="md" radius="md" />
          <Input placeholder="Name" size="md" radius="md" mt="md" />
          <Textarea
            mt="md"
            placeholder="Message..."
            size="md"
            autosize
            minRows={2}
            maxRows={6}
            radius="md"
          />
          <Button mt="md" radius="lg">
            Submit
          </Button>
        </GetInTouchForm>
      </NewCard>
      <MacEmo
        src={MacEmoji}
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></MacEmo>
    </Container>
  );
};

export default Contact;
