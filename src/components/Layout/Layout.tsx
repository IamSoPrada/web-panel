import React from "react";
import { LayoutContainer } from "@/styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};
