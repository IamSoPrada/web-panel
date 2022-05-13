import styled from "styled-components";
import { devices } from "@/media";

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

export const CardTitle = styled.h2`
  min-width: fit-content;
  font-size: 1.8rem;
  font-weight: 700;
  @media ${devices.laptop} {
    font-size: 1.2rem;
  }
  @media ${devices.tablet} {
    font-size: 0.9rem;
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
  background-color: #737373;
  border: 1px solid var(--color-primary);
  color: #fff;
  gap: var(--gap);
`;
