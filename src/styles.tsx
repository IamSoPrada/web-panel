import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
  flex: 1;
  padding: 24px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 54px;
`;
