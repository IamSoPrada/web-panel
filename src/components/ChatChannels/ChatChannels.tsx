import React from "react";
import styled from "styled-components";
import { devices } from "@/media";
import { ChatHeader, ChatMenu } from "@/styles/chat";
import { Button } from "@/styles/common";
import { PlusIcon } from "@/styles/icons";

import { ChatChannel } from "./ChatChannel";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  max-width: 350px;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media ${devices.laptop} {
    max-width: 100vw;
  }
`;

export const ChatChannels = (props: Props) => {
  return (
    <Wrapper>
      <ChatHeader>Даилоги</ChatHeader>
      <ChatMenu>
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
        <ChatChannel channelName="trashtalk" />
      </ChatMenu>
      <Button outlined>
        <PlusIcon />
      </Button>
    </Wrapper>
  );
};
