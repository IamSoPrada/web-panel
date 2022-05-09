import styled from "styled-components";
import { devices } from "@/media";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #212427;
`;

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  min-height: 100vh;
  @media ${devices.laptop} {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  height: 54px;
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${devices.laptop} {
    justify-content: flex-start;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 54px;
`;

export const SideBarContainer = styled.div`
  display: flex;
  max-width: 80px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: #282c31;
  gap: 16px;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  transition: all 0.2s ease-in-out;
  border: 1px solid #4d4d4d;

  @media ${devices.laptop} {
    border-right: none;
    border-left: none;
    position: sticky;
    bottom: 0;
    flex-direction: row;
    min-width: 100vw;
    order: 2;
  }
  &:hover {
    max-width: 120px;
  }
`;

interface CardContainerProps {
  size: "small" | "middle" | "big";
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #282c31;
  padding: var(--card-padding);
  border-radius: 13px;
  border: 1px solid #4d4d4d;
  gap: var(--gap);
  min-width: 250px;
  max-width: ${({ size }) =>
    size === "small" ? "33%" : size === "middle" ? "50%" : "70%"};
`;

export const CardTitle = styled.h3`
  min-width: fit-content;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const CardDescr = styled.p`
  font-size: 0.8rem;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WebPanelContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: var(--gap);

  @media ${devices.laptop} {
    flex-wrap: wrap;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

/* ICONS */
export const SettingsIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  );
};

export const HomeIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
};
export const MessagesIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
    </svg>
  );
};
export const AdjustmentsIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
    </svg>
  );
};
export const WeatherIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </svg>
  );
};
export const ToDoIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const NewsIcon = () => {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clipRule="evenodd"
      />
      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
    </svg>
  );
};
