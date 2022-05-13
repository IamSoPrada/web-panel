import React from "react";
import { devices } from "@/media";
import styled from "styled-components";
import { ChatHeader, Message, ChatBox } from "@/styles/chat";
import { Button } from "@/styles/common";
import { Input } from "@/components/Input";
import { PlusIcon } from "@/styles/icons";

type Props = {};

const FullWindowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media ${devices.laptop} {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
`;
export const ChatDialogueWindow = (props: Props) => {
  return (
    <FullWindowWrapper>
      <ChatHeader>#trash-talk</ChatHeader>
      <ChatBox>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
        <Message>Sadad</Message>
      </ChatBox>

      <Wrapper>
        <Input placeholder="Ваше сообщение..." />
        <Button outlined>
          <PlusIcon />
        </Button>
      </Wrapper>
    </FullWindowWrapper>
  );
};
