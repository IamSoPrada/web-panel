import React from "react";
import { SideBar } from "@/components/SideBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "@/styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <SideBar />
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
};
