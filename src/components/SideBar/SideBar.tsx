import React from "react";
import { Link } from "react-router-dom";
import { SideBarContainer } from "@/styles/common";
import {
  HomeIcon,
  MessagesIcon,
  AdjustmentsIcon,
  WeatherIcon,
  ToDoIcon,
  NewsIcon,
} from "@/styles/icons";

type SideBarProps = {};

export const SideBar: React.FC<SideBarProps> = () => {
  return (
    <SideBarContainer>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/todos">
        <ToDoIcon />
      </Link>
      <Link to="/chat">
        <MessagesIcon />
      </Link>
      <Link to="/news">
        <NewsIcon />
      </Link>
      <Link to="/weather">
        <WeatherIcon />
      </Link>
      <Link to="/settings">
        <AdjustmentsIcon />
      </Link>
    </SideBarContainer>
  );
};
