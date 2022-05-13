import styled from "styled-components";
import { devices } from "@/media";

export const ChatMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  max-width: 350px;
  height: calc(100vh - 150px);
  overflow-y: auto;
  @media ${devices.laptop} {
    max-width: 100vw;
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: var(--common-padding);
  overflow-y: auto;
  width: 100%;
  height: calc(100vh - 200px);

  @media ${devices.laptop} {
    display: none;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  border: 1px solid var(--color-primary);
  border-left: none;
  width: 100%;
  padding: var(--common-padding);
  justify-content: space-between;
  align-items: center;
  @media ${devices.laptop} {
    display: none;
  }
`;
export const ChatBox = styled.div`
  display: flex;
  height: calc(100vh - 150px);
  overflow-y: scroll;
  width: 100%;
  flex-direction: column;

  padding: var(--common-padding);
  border: 1px solid var(--color-primary);
  gap: var(--gap);
`;
export const ChatRoom = styled.div`
  display: flex;
  padding: var(--common-padding);
  width: 100%;
  align-items: center;
  background-color: #212427;
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    border-left: 10px solid blue;
    background-color: #585858;
  }
`;

export const ChatRoomLogo = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  border-radius: 50%;
  background-color: #c6c6c6;
  width: 50px;
  height: 50px;
`;
export const ChatRoomTitle = styled.span`
  font-size: 1.2rem;
`;
export const Message = styled.div`
  display: flex;
  padding: 8px;
  height: 40px;
  background-color: #fff;
  max-width: fit-content;
  border-radius: var(--border-radius);
  color: #3c3c3c;
  align-items: center;
  font-size: 1rem;
  justify-content: center;
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.laptop} {
    display: none;
  }
`;
