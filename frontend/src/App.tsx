import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import AppRouter from "./Router";
import GlobalStyles from "./shared/GlobalStyles";
import { Header } from "./stories/nav/Header";
import { viewWidthState } from './index';

const Dotori = styled.div`
  font-size: 10rem;
`;

function App() {
  // 브라우저 너비 조정
  const setViewWidth = useSetRecoilState(viewWidthState);
  const handleWindowResize = () => {
    setViewWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  return (
    <>
      <AppRouter />
      <GlobalStyles />
    </>
  );
}

export default App;
