import React from "react";
import styled from "styled-components";
import { Divider } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

const FooterContainer = styled.div`
  margin: 0 10%;
`;
const FooterInnerContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContactIcons = styled.div``;
const footer = () => {
  return (
    <FooterContainer>
      <Divider size="md" style={{ marginTop: "3rem" }} />
      <FooterInnerContainer>
        <p>© 2024 Sam Jonath Tech</p>
        <ContactIcons>
          <a
            href={"https://www.linkedin.com/in/sam-jonath/"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <IconBrandLinkedin size={20} style={{ marginLeft: "5px" }} />
          </a>
          <a
            href={"https://www.linkedin.com/in/sam-jonath/"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <IconBrandInstagram size={20} style={{ marginLeft: "5px" }} />
          </a>
          <a
            href={"https://github.com/samjonath"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <IconBrandGithub size={20} style={{ marginLeft: "5px" }} />
          </a>
          <a
            href={"mailto:sam2211joe@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <IconMail size={20} style={{ marginLeft: "5px" }} />
          </a>
        </ContactIcons>
      </FooterInnerContainer>
    </FooterContainer>
  );
};

export default footer;
