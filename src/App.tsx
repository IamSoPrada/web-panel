import React from "react";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";
import { Layout } from "@/components/Layout";
import { AppContainer } from "./styles";

type AppProps = {
  children?: React.ReactNode;
};

export const App: React.FC<AppProps> = (props) => {
  return (
    <AppContainer>
      {/* <Header /> */}
      <Layout>
        <SideBar />
        <Main />
      </Layout>

      {/* <Footer /> */}
    </AppContainer>
  );
};
