import React from "react";
import { ChatRoom, ChatRoomLogo, ChatRoomTitle } from "@/styles/chat";

type ChatChannelProps = {
  channelName: string;
};

export const ChatChannel: React.FC<ChatChannelProps> = ({ channelName }) => {
  return (
    <ChatRoom>
      <ChatRoomLogo />
      <ChatRoomTitle>{channelName}</ChatRoomTitle>
    </ChatRoom>
  );
};
