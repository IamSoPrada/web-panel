import React from "react";
import {
  SideBarContainer,
  HomeIcon,
  MessagesIcon,
  Button,
  AdjustmentsIcon,
  WheatherIcon,
  ToDoIcon,
  NewsIcon,
} from "@/styles";

type SideBarProps = {};

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <SideBarContainer>
      <Button>
        <HomeIcon />
      </Button>
      <Button>
        <ToDoIcon />
      </Button>
      <Button>
        <MessagesIcon />
      </Button>
      <Button>
        <NewsIcon />
      </Button>
      <Button>
        <WheatherIcon />
      </Button>
      <Button>
        <AdjustmentsIcon />
      </Button>
    </SideBarContainer>
  );
};
