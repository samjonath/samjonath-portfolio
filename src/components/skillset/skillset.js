import React from "react";
import styled from "styled-components";

import Skills from "./skills";

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

const Skillset = () => {
  return (
    <SkillSetContainer>
      <SkillSetTitleContainer>
        <SkillSetTitle>Skill Set</SkillSetTitle>
      </SkillSetTitleContainer>
      <SkillSetContent>
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
