import styled from "styled-components";
import { devices } from "@/media";

/* App containers */
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #212427;
`;

export const LayoutContainer = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  @media ${devices.laptop} {
    flex-direction: column;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  min-width: 100vw;
  padding: 0 16px;
  justify-content: space-between;
  align-items: center;
  height: 54px;
`;

type MainContainerProps = {
  justify?: "center" | "start" | "end";
};

export const MainContainer = styled.main<MainContainerProps>`
  display: flex;
  padding: var(--common-padding);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  gap: var(--gap);
  @media ${devices.laptop} {
    justify-content: flex-start;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  position: absolute;
  bottom: 20px;
  left: 100px;
  min-width: calc(100vw - 120px);
  @media ${devices.laptop} {
    display: none;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: var(--border-radius);
  padding: 10px;
  background-color: #1b1d20;
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

    flex-direction: row;
    min-width: 100vw;
    order: 2;
  }
  &:hover {
    max-width: 120px;
  }
`;

type WrapperProps = {
  direction: "row" | "column";
  justify?: "center" | "start" | "end" | "space-between" | "space-around";
  align?: "center" | "start" | "end";
  bgColor?: string;
  maxHeight?: string;
  flexWrap?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? "wrap" : "nowrap")};
  padding: var(--common-padding);
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: var(--gap);
  width: 100%;
  overflow-y: ${({ maxHeight }) => (maxHeight ? "auto" : "none")};
  max-height: ${({ maxHeight }) => maxHeight || "100%"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

export const FormContainer = styled.form`
  display: flex;
  padding: 25px;
  width: 100%;
  max-width: 500px;
  flex-direction: column;
`;

/* Components */
interface CardContainerProps {
  size: "small" | "middle" | "big";
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #282c31;
  padding: var(--card-padding);
  border-radius: var(--border-radius);
  border: 1px solid #4d4d4d;
  gap: var(--gap);
  min-width: 100px;
  max-width: ${({ size }) =>
    size === "small" ? "33%" : size === "middle" ? "50%" : "70%"};
  @media ${devices.laptop} {
    max-width: ${({ size }) =>
      size === "small" ? "49.9%" : size === "middle" ? "70%" : "100%"};
    padding: 12px;
  }
  @media ${devices.mobileL} {
    padding: 10px;
    max-width: 100%;
  }
`;

export const CardTitle = styled.h3`
  min-width: fit-content;
  font-size: 1.2rem;
  font-weight: 700;
  @media ${devices.laptop} {
    font-size: 1.1rem;
  }
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
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
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: var(--gap);
  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

type ButtonProps = {
  outlined?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  max-width: fit-content;
  align-items: center;
  vertical-align: middle;
  align-self: center;
  padding: 8px 16px;
  outline: none;
  border: ${({ outlined }) =>
    outlined ? `1px solid var(--color-primary)` : `none`};
  border-radius: var(--border-radius);
  background-color: transparent;
  color: var(--color-primary);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  height: 48px;
  padding: 0 16px;
  font-size: 1.2rem;
  color: var(--color-primary);
  background-color: #1b1d20;
  transition: all 0.3s ease-in;

  @media ${devices.laptop} {
    font-size: 1rem;

    &:active {
      width: 100%;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--common-padding);
  width: 100%;
  max-width: 300px;
  background-color: #4c4c4c;
  border: 1px solid var(--color-primary);
  color: #fff;
  gap: var(--gap);
  border-radius: var(--border-radius);
`;

/* ICONS */

const Icon = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})``;

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
  stroke-width: 10px;
  fill: var(--color-primary);
  transition: all 0.1s ease-in;
  &:hover {
    fill: #fff;
  }
`;

export const SettingsIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </Svg>
  );
};

export const HomeIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </Svg>
  );
};
export const MessagesIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
    </Svg>
  );
};
export const AdjustmentsIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
    </Svg>
  );
};
export const WeatherIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </Svg>
  );
};
export const ToDoIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export const NewsIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
        clipRule="evenodd"
      />
      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
    </Svg>
  );
};
export const WorldIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export const PlusIcon = () => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
