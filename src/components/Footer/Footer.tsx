import React from "react";
import { Link } from "react-router-dom";
import { WorldIcon } from "@/styles/icons";
import { FooterContainer, FooterLinksContainer } from "@/styles/common";

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
