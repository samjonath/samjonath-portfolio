import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Autoplay from "embla-carousel-autoplay";
import Aos from "aos";
import "aos/dist/aos.css";

import ideaEmoji from "../../assets/images/idea-iemoji.png";
import PeaceEmoji from "../../assets/images/peace-iemoji.png";
import certi1 from "../../assets/images/certi1.jpg";
import certi2 from "../../assets/images/certi2.png";
import certi3 from "../../assets/images/certi3.png";
import certi4 from "../../assets/images/certi4.png";
import certi5 from "../../assets/images/certi5.png";
import certi6 from "../../assets/images/certi6.png";
import certi7 from "../../assets/images/certi7.png";

import resumePDF from "../../assets/files/Sam'sResume.pdf";

import { Card, Text, Button, Timeline } from "@mantine/core";
import {
  IconGitBranch,
  IconMapPin,
  IconHourglassHigh,
  IconDownload,
  IconDeviceLaptop,
  IconUsers,
  IconRobot,
  IconBooks,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

import Skillset from "../../components/skillset/skillset";
import Skills from "../../components/skillset/skills";
import Intro from "../../components/intro/intro";

const Container = styled.div``;

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;
const AboutTitleContainer = styled.div`
  display: grid;
  justify-items: center;
  margin-top: 1rem;
`;
const AboutTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: #d8d9da;
  margin: 0;
`;
const AboutTitleExtra = styled.h3`
  margin: 0;
  position: relative;
  bottom: 55px;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  color: #352f44;
`;

const AboutContent = styled.div`
  width: 75%;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const SkillSetContainer = styled.div`
  margin-top: 15px;
`;

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ExperienceTitleContainer = styled.div`
  display: grid;
  justify-items: start;
  margin-top: 1rem;
  width: 75%;
`;
const ExperienceTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: #d8d9da;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 3.5rem;
  }
`;
const ExperienceContent = styled.div`
  width: 75%;
  margin-top: 20px;
`;

const AwardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const AwardsTitleContainer = styled.div`
  display: flex;
  justify-items: start;
  width: 75%;
`;
const AwardsTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: #d8d9da;
  margin: 0;
`;

const AwardsContent = styled.div`
  width: 75%;
  padding: 20px 10px;
  background-color: #352f44;
  border-radius: 30px;
`;
const AwardsImageCont = styled.img`
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  padding: 10px 14rem 30px 14rem;
  @media only screen and (max-width: 600px) {
    padding: 10px 14rem 30px 14rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 10px 14rem 30px 14rem;
  }
`;

const DownloadCVContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const DownloadCVTitleContainer = styled.div`
  width: 75%;
  display: flex;
`;

const DownloadInnerDiv = styled.div`
  width: 25%;
  border-radius: 30px;
  background-color: #352f44;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 4rem 0px;
  @media only screen and (max-width: 600px) {
    margin: 4rem 0px;
    width: 70%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin: 4rem 0px;
    width: 45%;
  }
`;

const Newlanding = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const navigate = useNavigate();

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const resumeRef = useRef(null);
  const awardsRef = useRef(null);

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

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    switch (hash) {
      case "intro":
        scrollToSection(introRef);
        break;
      case "about":
        scrollToSection(aboutRef);
        break;
      case "skills":
        scrollToSection(skillsRef);
        break;
      case "experience":
        scrollToSection(experienceRef);
        break;
      case "resume":
        scrollToSection(resumeRef);
        break;
      case "awards":
        scrollToSection(awardsRef);
        break;
      default:
        // Do nothing
        break;
    }
  }, [window.location.hash]);

  const onButtonClick = () => {
    const pdfUrl = resumePDF;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sam's Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Intro />
      <About id="about" ref={aboutRef}>
        <AboutTitleContainer data-aos="fade-up">
          <AboutTitle>ABOUT</AboutTitle>
          <AboutTitleExtra>Who am I?</AboutTitleExtra>
        </AboutTitleContainer>
        <AboutContent
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            style={{ backgroundColor: "white" }}
            data-aos="fade-up"
          >
            <Text c="dimmed">
              {/* An enthusiastic undergraduate with good skills in coding and
              creativity. With interest in field of web development, machine
              learning and related areas. As a student I was good at science,
              Mathematics, Social but nothing interests me more than coding and
              create something out of pure creativity. There has been struggles
              in this journey but what kept me going is that I find learning new
              things exciting and facing unfamiliar challenges interesting. I
              believe that ciphering is the language of future. */}
              My journey into coding began in my gaming-filled childhood,
              sparking a curiosity for tech creation. Exploring programming
              languages and mastering problem-solving, I discovered the
              fascinating realm of AI/ML. Motivated to create functional and
              visually appealing solutions, I delved into web development. Now,
              I craft elegant and efficient solutions that reach and assist
              people in a simple yet effective manner.
              {/* My coding expedition began through a childhood filled with gaming
              and excitement. My curiosity of how these techs are made drove me into the field of computer science,
              i started off by exploring various programming language and devloping a hold on complex problem solving
              and stumbled upon the concept of AI/ML which i found very facinating and I spent alot of time exploring
              the field of machine learning. throughout all this there was a part of me where i wanter to do more functional
              and visually apealing solutions which reaches and helps people in simple yet efficient way, that when i pursued 
              web development to create simple, elegant and efficent solutions. */}
            </Text>
          </Card>
        </AboutContent>
      </About>
      {/* next section------------------------------------------------------------------- */}
      <SkillSetContainer id="skills" ref={skillsRef}>
        <Skillset />
      </SkillSetContainer>
      {/* next section------------------------------------------------------------------- */}
      <ExperienceContainer id="experience" ref={experienceRef}>
        <ExperienceTitleContainer data-aos="fade-up">
          <ExperienceTitle>Experience</ExperienceTitle>
        </ExperienceTitleContainer>
        <ExperienceContent
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Timeline color="blue" active={0} bulletSize={70} lineWidth={10}>
            <Timeline.Item
              bullet={<IconDeviceLaptop size={20} />}
              title="ABInBev GCC"
              style={{ padding: "0 50px" }}
              data-aos="fade-up"
            >
              <Text size="md">Full-Stack Developer</Text>
              <Text c="dimmed" size="sm" style={{ margin: "10px 0" }}>
                Was part of a amazing team where we collabrated to develop a
                Financial Recon Tool which will help in managing Ambiguity in
                the Financial Data with simple and easy to understand interface
                talior made for the companies structure. Thrived in an Agile
                development environment, fostering seamless collaboration with a
                team of skilled developers. Demonstrated a strong sense of
                ownership by crafting end-to- end optimal solutions, always with
                a keen eye on long-term sustainability and success.
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Skills value="React" />
                <Skills value="Flask" />
                <Skills value="Node.js" />
                <Skills value="SQL" />
                <Skills value="Mantine/Material UI" />
                <Skills value="Postman" />
                <Skills value="Azure" />
              </div>
              <Text size="xs" mt={4}>
                <IconHourglassHigh size={15} style={{ marginRight: "5px" }} />
                02/2023 - 07/2023
              </Text>
              <Text size="xs" mt={4}>
                <IconMapPin size={15} style={{ marginRight: "5px" }} />
                Bangalore,India
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconUsers size={20} />}
              title="Honeywell BCIC hackathon"
              style={{ padding: "0 50px" }}
              data-aos="fade-up"
            >
              <Text size="md">National Finalist</Text>
              <Text c="dimmed" size="sm">
                Secured Second position in inter University competition Across
                India.
              </Text>
              <Text c="dimmed" size="sm">
                This consists of Two phases:
              </Text>
              <Text c="dimmed" size="sm">
                1.Ideation: come up with a social problem according to the
                general problem statements given.
              </Text>
              <Text c="dimmed" size="sm">
                2.Implimentation: create a real-time web app/ solution for the
                problem statement.
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Skills value="Django" />
                <Skills value="NLP" />
                <Skills value="python" />
                <Skills value="Supervised Learning" />
                <Skills value="BiDirectional LSTM" />
                <Skills value="RandomForest" />
                <Skills value="Google maps API" />
                <Skills value="TomTom API" />
                <Skills value="OpenWeather API" />
              </div>
              <Text size="xs" mt={4}>
                <IconHourglassHigh size={15} style={{ marginRight: "5px" }} />
                09/2022 - 11/2022
              </Text>
              <Text size="xs" mt={4}>
                <IconMapPin size={15} style={{ marginRight: "5px" }} />
                Bangalore,India
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconRobot size={20} />}
              title="Feynn Labs"
              style={{ padding: "0 50px" }}
              data-aos="fade-up"
            >
              <Text size="md">Machine Learning and Data Analysis Intern</Text>
              <Text c="dimmed" size="sm">
                AI product/Service Prototyping - Built a Diet Recommendation
                Model, Creates a Diet plan according to the user’s Requirement.
                Market segmentation using machine Learning and data- Analysis.
                Worked on Machine Learning models, selenium for web Scraping and
                Data annotation.
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Skills value="Python" />
                <Skills value="Supervised/Unsupervised Models" />
                <Skills value="NLP" />
                <Skills value="Google Colab" />
                <Skills value="tensorFlow" />
              </div>
              <Text size="xs" mt={4}>
                <IconHourglassHigh size={15} style={{ marginRight: "5px" }} />
                03/2022 - 05/2022
              </Text>
              <Text size="xs" mt={4}>
                <IconMapPin size={15} style={{ marginRight: "5px" }} />
                Bangalore,India
              </Text>
            </Timeline.Item>
            <Timeline.Item
              bullet={<IconBooks size={20} />}
              title="Amrita School of Engineering "
              style={{ padding: "0 50px" }}
              data-aos="fade-up"
            >
              <Text size="md">
                B.Tech in Electrical and Computer Engineering
              </Text>
              <Text c="dimmed" size="sm">
                A Cource with Ample of oppertunities, learning from ground up of
                the computer science world.
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Skills value="DSA" />
                <Skills value="AI/ML" />
                <Skills value="Computer Network" />
                <Skills value="DBMS" />
              </div>
              <Text size="xs" mt={4}>
                <IconHourglassHigh size={15} style={{ marginRight: "5px" }} />
                03/2022 - 05/2022
              </Text>
              <Text size="xs" mt={4}>
                <IconMapPin size={15} style={{ marginRight: "5px" }} />
                Coimbatore,India
              </Text>
            </Timeline.Item>
          </Timeline>
        </ExperienceContent>
      </ExperienceContainer>
      {/* next section------------------------------------------------------------------- */}
      <DownloadCVContainer id="resume" ref={resumeRef} data-aos="fade-up">
        <DownloadCVTitleContainer>
          <DownloadInnerDiv>
            <Button
              variant="light"
              style={{ borderRadius: "30px" }}
              onClick={onButtonClick}
            >
              <IconDownload />
            </Button>
            <span style={{ marginLeft: "10px", color: "white" }}>
              DOWNLOAD RESUME
            </span>
          </DownloadInnerDiv>
          <img
            src={ideaEmoji}
            style={{
              position: "relative",
              height: "9rem",
              right: "50px",
              top: "10px",
            }}
          ></img>
        </DownloadCVTitleContainer>
      </DownloadCVContainer>
      {/* next section------------------------------------------------------------------- */}
      <AwardsContainer id="awards" ref={awardsRef}>
        <AwardsTitleContainer>
          <AwardsTitle>Awards</AwardsTitle>
        </AwardsTitleContainer>
        <AwardsContent
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Carousel
            withIndicators
            slideGap="md"
            loop
            height={"25rem"}
            // plugins={[autoplay.current]}
            // onMouseEnter={autoplay.current.stop}
            // onMouseLeave={autoplay.current.reset}
            style={{ borderRadius: "30px" }}
          >
            <Carousel.Slide>
              <AwardsImageCont src={certi1}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi2}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi3}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi4}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi5}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi6}></AwardsImageCont>
            </Carousel.Slide>
            <Carousel.Slide>
              <AwardsImageCont src={certi7}></AwardsImageCont>
            </Carousel.Slide>
          </Carousel>
        </AwardsContent>
      </AwardsContainer>
      {/* next section------------------------------------------------------------------- */}
    </Container>
  );
};

export default Newlanding;
