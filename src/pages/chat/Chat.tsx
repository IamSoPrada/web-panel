import React from "react";
import styled from "styled-components";
import { ChatChannels } from "@/components/ChatChannels";
import { ChatDialogueWindow } from "@/components/ChatDialogueWindow";
import { Input } from "@/components/Input";
import { useMatchMedia } from "@/hook/useMatchMedia";
import {
  Button,
  MainContainer,
  FormContainer,
  FullWindowWrapper,
} from "@/styles/common";

type Props = {};

const ChatMainContainer = styled.main`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const Chat = (props: Props) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  console.log(isMobile, isTablet, isDesktop);
  return (
    <ChatMainContainer>
      <ChatChannels />
      <ChatDialogueWindow />
    </ChatMainContainer>
  );
};
