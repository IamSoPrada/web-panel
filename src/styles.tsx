import styled from "styled-components";
import { devices } from "@/media";

export const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #212427;
`;

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
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
  flex-direction: column;

  flex: 1;
  width: 100%;
  
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 54px;
`;

export const SideBarContainer = styled.div`
  display: flex;
  max-width: 100px;
  flex-direction: column;
  width: 100%;
  background-color: #282c31;
  gap: 16px;
  align-items: center;
  padding: 10px;
  border: 2px solid black;
  transition: all 0.2s ease-in-out;
  border: 1px solid #4d4d4d;
  @media ${devices.mobileL} {
    display: none;
  }
  @media ${devices.tablet} {
    max-width: 100px;
  }
  &:hover {
    max-width: 250px;
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
    size === "small" ? "350px" : size === "middle" ? "500px" : "700px"};
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
  justify-content: space-around;
  padding: var(--common-padding);
  gap: var(--gap);
  align-items: center;
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
