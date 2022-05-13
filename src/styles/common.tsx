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
  justify-content: start;
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
  padding: ${({ maxHeight }) => (maxHeight ? "0px" : "var(--common-padding)")};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ maxHeight }) => (maxHeight ? "4px" : "var(--gap)")};
  width: 100%;
  overflow-y: ${({ maxHeight }) => (maxHeight ? "auto" : "none")};
  max-height: ${({ maxHeight }) => maxHeight || "100%"};
  background-color: ${({ bgColor }) => bgColor || "transparent"};
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

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: column;
`;

export const FullWindowWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;
