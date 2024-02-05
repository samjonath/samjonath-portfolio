import { React, useEffect } from "react";
import styled from "styled-components";

import Skills from "./skills";
import Aos from "aos";
import "aos/dist/aos.css";

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
  @media only screen and (max-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 3.5rem;
  }
`;
const SkillSetContent = styled.div`
  width: 75%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

const Skillset = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <SkillSetContainer>
      <SkillSetTitleContainer data-aos="fade-up">
        <SkillSetTitle>Skill Set</SkillSetTitle>
      </SkillSetTitleContainer>
      <SkillSetContent data-aos="fade-up">
        <Skills value="ReactJS" />
        <Skills value="Next.js" />
        <Skills value="Material-UI" />
        <Skills value="Framer-Motion" />
        <Skills value="Mantine" />
        <Skills value="Bootstrap" />
        <Skills value="HTML" />
        <Skills value="CSS" />
        <Skills value="Git" />
        <Skills value="GitHub" />
        <Skills value="Azure" />
        <Skills value="Node.js" />
        <Skills value="Python" />
        <Skills value="Flask" />
        <Skills value="GraphQL" />
        <Skills value="FireBase" />
        <Skills value="MongoDB" />
        <Skills value="Django" />
        <Skills value="SQL" />
        <Skills value="C ++" />
        <Skills value="PostMan" />
        <Skills value="Docker" />
        <Skills value="MSAL" />
        <Skills value="JWT" />
        <Skills value="Tensorflow" />
        <Skills value="PyTorch" />
        <Skills value="Scikit-Learn" />
        <Skills value="Keras" />
        <Skills value="Numpy" />
      </SkillSetContent>
    </SkillSetContainer>
  );
};

export default Skillset;
