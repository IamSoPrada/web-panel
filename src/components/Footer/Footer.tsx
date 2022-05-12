import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterLinksContainer, WorldIcon } from "@/styles";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <Link to="sss">
          <WorldIcon />
        </Link>
      </FooterLinksContainer>
    </FooterContainer>
  );
};
