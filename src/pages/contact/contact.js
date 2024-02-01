import React from "react";
import styled from "styled-components";

import Intro from "../../components/intro/intro";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 6vw;
  margin-top: 3vw;
`;

const ContactContainer = styled.div``;

const Contact = () => {
  return (
    <Container>
      <Intro />
    </Container>
  );
};

export default Contact;
