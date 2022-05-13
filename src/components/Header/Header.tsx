import React from "react";
import { HeaderContainer } from "@/styles/common";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <HeaderContainer>{children}Header</HeaderContainer>;
};
