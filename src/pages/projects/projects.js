import { React, useState, useRef, useEffect } from "react";

import { Card, Text, Button, Timeline } from "@mantine/core";
import styled from "styled-components";

import Aos from "aos";
import "aos/dist/aos.css";

import { IconGitBranch } from "@tabler/icons-react";

import Skills from "../../components/skillset/skills";
import Blob from "../../toolComponents/blob/blob";
import Intro from "../../components/intro/intro";

import AidwiserImage from "../../assets/images/aidwiser.png";
import SmartImage from "../../assets/images/Smart.png";
import MaltImage from "../../assets/images/Malt.png";
import AmazonImage from "../../assets/images/Amazon.png";
import AyurImage from "../../assets/images/Ayur.png";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 6vw;
  margin-top: 3vw;
`;

const NewCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin: 10vh 6vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  flex-direction: row;
  top: 14vh;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 1rem;
`;
const Title = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: #d8d9da;
  margin: 0;
`;
const TitleExtra = styled.h3`
  margin: 0;
  position: relative;
  bottom: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  color: #352f44;
`;

const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectrTitle = styled.h3``;
const ProjectImage = styled.img`
  width: 40%;
  height: 70%;
  border-radius: 30px;
  object-fit: cover;
  margin: 2vh 3vw;
  @media only screen and (max-width: 600px) {
    width: 80%;
    height: 70%;
  }
  @media only screen and (min-width: 601px) and (max-width: 800px) {
    width: 60%;
    height: 70%;
  }
`;
const ProjectDesc = styled.div`
  margin: 0px 2vw;
`;
const ProjectDescTitle = styled.h3`
  font-size: 2vw;
  margin: 3vh 0;
`;
const ProjectDescAbout = styled.p`
  margin-bottom: 3vh;
`;
const ProjectDescSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProjectMoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const Links = styled.a`
  margin: 0 0.5vw 0 0;
  font-weight: bolder;
  text-decoration: none;
  color: navy;
`;

const Para = styled.p`
  margin: 0 1vw;
`;

const Projects = () => {
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
      <TitleContainer data-aos="fade-up">
        <Title>PROJECTS</Title>
        <TitleExtra>My Works</TitleExtra>
      </TitleContainer>
      <CardsContainer>
        <NewCard>
          {/* <ProjectrTitle>Project 1</ProjectrTitle> */}
          <ProjectImage src={AidwiserImage}></ProjectImage>
          <ProjectDesc>
            <ProjectMoreInfo>
              <Links
                href="https://aidwiserproject.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LEARN MORE
              </Links>
              <Para>BANGLORE, INDIA</Para>
              <Para>OCTOBER, 2021</Para>
            </ProjectMoreInfo>
            <ProjectDescTitle>AidWiser</ProjectDescTitle>
            <ProjectDescAbout>
              A Web application which finds ambulance routes, keeps all the
              users informed about current situation, through NLP and some
              predicting models and APIs.
            </ProjectDescAbout>
            <ProjectDescSkills>
              <Skills value="Python" />
              <Skills value="Supervised Learning" />
              <Skills value="Django" />
              <Skills value="BiDrictional LSTM" />
              <Skills value="RandomForest" />
              <Skills value="Google Maps API" />
              <Skills value="TomTom API" />
              <Skills value="OpenWeather API" />
            </ProjectDescSkills>
          </ProjectDesc>
        </NewCard>
        <NewCard>
          {/* <ProjectrTitle>Project 2</ProjectrTitle> */}
          <ProjectImage src={SmartImage}></ProjectImage>
          <ProjectDesc>
            <ProjectMoreInfo>
              <Links
                // href="https://aidwiserproject.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK YET TO BE POSTED
              </Links>
              <Para>COIMBATORE, INDIA</Para>
              <Para>OCTOBER, 2022</Para>
            </ProjectMoreInfo>
            <ProjectDescTitle>Smart Attendance System</ProjectDescTitle>
            <ProjectDescAbout>
              With the use of ML face recognition Model, Raspberry pi, computer
              netowork concepts and Socket programming this Application Manages
              Attendance System without the hassle of manual entry of data.
            </ProjectDescAbout>
            <ProjectDescSkills>
              <Skills value="Raspberry pi" />
              <Skills value="Computer network" />
              <Skills value="Sockets" />
              <Skills value="Machine Learning" />
              <Skills value="Supervised Learning" />
              <Skills value="Convolutional Neural Network" />
            </ProjectDescSkills>
          </ProjectDesc>
        </NewCard>
        <NewCard>
          {/* <ProjectrTitle>Project 3</ProjectrTitle> */}
          <ProjectImage src={MaltImage}></ProjectImage>
          <ProjectDesc>
            <ProjectMoreInfo>
              <Links
                // href="https://aidwiserproject.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK YET TO BE POSTED
              </Links>
              <Para>BANGALORE, INDIA</Para>
              <Para>AUGUST, 2023</Para>
            </ProjectMoreInfo>
            <ProjectDescTitle>MALT</ProjectDescTitle>
            <ProjectDescAbout>
              A Financial Reconcilliation App with RBAC, tailor made to fetch
              Company Financial Data and Process them and make the work of
              reviewers easy to check validity of an entry. and facilitate a
              follow-up mechanism which helps in contacting the Data-entry
              Owner.
            </ProjectDescAbout>
            <ProjectDescSkills>
              <Skills value="React" />
              <Skills value="Flask" />
              <Skills value="Node.js" />
              <Skills value="SQL" />
              <Skills value="Mantine/Material UI" />
              <Skills value="Postman" />
              <Skills value="Azure" />
            </ProjectDescSkills>
          </ProjectDesc>
        </NewCard>
        <NewCard>
          {/* <ProjectrTitle>Project 4</ProjectrTitle> */}
          <ProjectImage src={AmazonImage}></ProjectImage>\
          <ProjectDesc>
            <ProjectMoreInfo>
              <Links
                // href="https://aidwiserproject.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK YET TO BE POSTED
              </Links>
              <Para>COIMBATORE, INDIA</Para>
              <Para>AUGUST, 2021</Para>
            </ProjectMoreInfo>
            <ProjectDescTitle>AMAZON ML HACKATHON</ProjectDescTitle>
            <ProjectDescAbout>
              An NLP pipeline for an LSTM model was implemented on a dataset
              with over 11 lakhs attributes, encompassing preprocessing
              (tokenization and lemmatization), bidirectional LSTM modeling, and
              post-processing.
            </ProjectDescAbout>
            <ProjectDescSkills>
              <Skills value="Python" />
              <Skills value="NLP-Pipeline" />
              <Skills value="Machine Learning" />
              <Skills value="Ensemble Model" />
            </ProjectDescSkills>
          </ProjectDesc>
        </NewCard>
        <NewCard>
          {/* <ProjectrTitle>Project 5</ProjectrTitle> */}
          <ProjectImage src={AyurImage}></ProjectImage>
          <ProjectDesc>
            <ProjectMoreInfo>
              <Links
                // href="https://aidwiserproject.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINK YET TO BE POSTED
              </Links>
              <Para>COIMBATORE, INDIA</Para>
              <Para>JUNE, 2022</Para>
            </ProjectMoreInfo>
            <ProjectDescTitle>AYURVEDIC DRUG REVIEW (NLP)</ProjectDescTitle>
            <ProjectDescAbout>
              Using multiple ML models and classifiers test the accuracy result
              of the models by feeding custom dataset scrapped from multiple
              sources like MDN, twitter
            </ProjectDescAbout>
            <ProjectDescSkills>
              <Skills value="React" />
              <Skills value="Flask" />
              <Skills value="Node.js" />
              <Skills value="SQL" />
              <Skills value="Mantine/Material UI" />
              <Skills value="Postman" />
              <Skills value="Azure" />
            </ProjectDescSkills>
          </ProjectDesc>
        </NewCard>
      </CardsContainer>
    </Container>
  );
};

export default Projects;
