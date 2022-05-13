import React from "react";
import { SideBar } from "@/components/SideBar";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "@/styles/common";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <SideBar />
      <Outlet />
    </LayoutContainer>
  );
};
