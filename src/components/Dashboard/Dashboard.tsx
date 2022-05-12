import React from "react";
import { MainContainer, WebPanelContainer } from "@/styles";
import { PanelCardSmall } from "@/components/PanelCardSmall";
import { PanelCardMiddle } from "@/components/PanelCardMiddle";
import { PanelCardBig } from "@/components/PanelCardBig";

type MainProps = {
  children?: React.ReactNode;
};

export const Dashboard: React.FC<MainProps> = () => {
  return (
    <MainContainer justify="center">
      <WebPanelContainer>
        <PanelCardSmall title="Today" descr="271 people" />
        <PanelCardSmall title="Tomorrow" descr="43 visitors" />
        <PanelCardSmall title="Weather" descr="25 new followers" />
      </WebPanelContainer>
      <WebPanelContainer>
        <PanelCardBig title="Audience reach" descr="271 people" />
        <PanelCardSmall title="Followers" descr="25 new followers" />
      </WebPanelContainer>
      <WebPanelContainer>
        <PanelCardSmall title="Gender / Age" descr="271 people" />
        <PanelCardMiddle title="Geo" descr="271 people" />
      </WebPanelContainer>
    </MainContainer>
  );
};
