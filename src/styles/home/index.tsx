import styled from "styled-components";
import { devices } from "@/media";

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
