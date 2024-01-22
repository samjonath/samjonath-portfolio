import { React, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Autoplay from "embla-carousel-autoplay";

import ProfilePhotoSrc from "../../assets/images/WhatsApp_Image_2023-08-10_at_01.35.47-removebg-preview.png";
import newProPic from "../../assets/images/intro-pic.png";
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

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Timeline,
  rem,
} from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMapPin,
  IconHourglassHigh,
  IconArrowRight,
  IconArrowLeft,
  IconDownload,
} from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";

const Container = styled.div``;
const Intro = styled.div`
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
  font-size: 6rem;
  margin: 0;
`;
const Desig = styled.h3`
  background-color: #352f44;
  width: fit-content;
  font-size: 2rem;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0;
  color: white;
`;

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
`;

const SkillSetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SkillSetTitleContainer = styled.div`
  display: grid;
  justify-items: start;
  margin-top: 1rem;
  width: 75%;
`;
const SkillSetTitle = styled.h3`
  font-size: 4rem;
  font-weight: 800;
  color: #d8d9da;
  margin: 0;
`;
const SkillSetContent = styled.div`
  width: 75%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
const Skills = styled.div`
  padding: 3px 10px;
  margin: 5px;
  background-color: #352f44;
  color: white;
  border-radius: 5px;
  border: 2px solid #376fb6;
  box-shadow: 0 2px 3px #0000003;
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
  padding: 10px 80px 30px 80px;
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

const Newlanding = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const navigate = useNavigate();

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const resumeRef = useRef(null);
  const awardsRef = useRef(null);

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
  return (
    <Container>
      <Intro id="intro" ref={introRef}>
        <ProfilePhoto src={newProPic}></ProfilePhoto>
        <NameSpace>
          <Name>SAM JONATH</Name>
          <Desig>I'M A FULL STACK WEB DEVELOPER</Desig>
        </NameSpace>
      </Intro>
      <About id="about" ref={aboutRef}>
        <AboutTitleContainer>
          <AboutTitle>ABOUT</AboutTitle>
          <AboutTitleExtra>Who am I?</AboutTitleExtra>
        </AboutTitleContainer>
        <AboutContent>
          <Card
            shadow="md"
            padding="xl"
            radius="lg"
            style={{ backgroundColor: "white" }}
          >
            <Text style={{ fontSize: "16px" }} c="dimmed">
              An enthusiastic undergraduate with good skills in coding and
              creativity. With interest in field of web development, machine
              learning and related areas. As a student I was good at science,
              Mathematics, Social but nothing interests me more than coding and
              create something out of pure creativity. There has been struggles
              in this journey but what kept me going is that I find learning new
              things exciting and facing unfamiliar challenges. I believe that
              ciphering is the language of future.
            </Text>
          </Card>
        </AboutContent>
      </About>
      {/* next section------------------------------------------------------------------- */}
      <SkillSetContainer id="skills" ref={skillsRef}>
        <SkillSetTitleContainer>
          <SkillSetTitle>Skill Set</SkillSetTitle>
        </SkillSetTitleContainer>
        <SkillSetContent>
          <Skills>React</Skills>
          <Skills>Next.js</Skills>
          <Skills>Material-UI</Skills>
          <Skills>Framer-Motion</Skills>
          <Skills>Mantine</Skills>
          <Skills>HTML</Skills>
          <Skills>CSS</Skills>
          <Skills>Git</Skills>
          <Skills>GitHub</Skills>
          <Skills>Azure</Skills>
          <Skills>Node.js</Skills>
          <Skills>Python</Skills>
          <Skills>Flask</Skills>
          <Skills>GraphQL</Skills>
          <Skills>FireBase</Skills>
          <Skills>Django</Skills>
          <Skills>SQL</Skills>
          <Skills>PostMan</Skills>
          <Skills>Docker</Skills>
          <Skills>MSAL</Skills>
          <Skills>JWT</Skills>
        </SkillSetContent>
      </SkillSetContainer>
      {/* next section------------------------------------------------------------------- */}
      <ExperienceContainer id="experience" ref={experienceRef}>
        <ExperienceTitleContainer>
          <ExperienceTitle>Experience</ExperienceTitle>
        </ExperienceTitleContainer>
        <ExperienceContent>
          <Timeline color="blue" active={0} bulletSize={50} lineWidth={10}>
            <Timeline.Item
              bullet={<IconGitBranch size={20} />}
              title="ABInBev GCC"
            >
              <Text size="md">Full-Stack Developer</Text>
              <Text c="dimmed" size="sm">
                MALT - Financial Reconciliation tool which will help in managing
                Ambiguity in the Financial Data. Thrived in an Agile development
                environment, fostering seamless collaboration with a team of
                skilled developers. Demonstrated a strong sense of ownership by
                crafting end-to- end optimal solutions, always with a keen eye
                on long-term sustainability and success. Proficiently skilled in
                a range of technologies, including React.js, Flask, Node.js,
                SQL, and expertly utilized Mantine/Material UI, Postman, and
                Azure DevOps to streamline the development process.
              </Text>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Skills>React</Skills>
                <Skills>Flask</Skills>
                <Skills>Node.js</Skills>
                <Skills>SQL</Skills>
                <Skills>Mantine/Material UI</Skills>
                <Skills>Postman</Skills>
                <Skills>Azure</Skills>
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
              bullet={<IconGitBranch size={20} />}
              title="Honeywell BCIC hackathon"
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
                <Skills>React</Skills>
                <Skills>Flask</Skills>
                <Skills>Node.js</Skills>
                <Skills>SQL</Skills>
                <Skills>Mantine/Material UI</Skills>
                <Skills>Postman</Skills>
                <Skills>Azure</Skills>
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
              bullet={<IconGitBranch size={20} />}
              title="Feynn Labs"
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
                <Skills>React</Skills>
                <Skills>Flask</Skills>
                <Skills>Node.js</Skills>
                <Skills>SQL</Skills>
                <Skills>Mantine/Material UI</Skills>
                <Skills>Postman</Skills>
                <Skills>Azure</Skills>
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
          </Timeline>
        </ExperienceContent>
      </ExperienceContainer>
      {/* next section------------------------------------------------------------------- */}
      <DownloadCVContainer id="resume" ref={resumeRef}>
        <DownloadCVTitleContainer>
          <div
            style={{
              width: "25%",
              borderRadius: "30px",
              backgroundColor: "#352F44",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              margin: "4rem 0px",
            }}
          >
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
          </div>
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
        <AwardsContent>
          <Carousel
            withIndicators
            slideGap="md"
            loop
            height={"35rem"}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
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
    </Container>
  );
};

export default Newlanding;
