import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feedback from "./pages/Feedback";
import ChildList from "./pages/list/ChildList";
import ParentList from "./pages/list/ParentList";
import Main from "./pages/Main";
import ChildMinting from "./pages/minting/ChildMinting";
import ParentMinting from "./pages/minting/ParentMinting";
import Artist from "./pages/artist/Artist";
import NFTList from "./pages/artist/NFTList";
import { Header } from "./stories/nav/Header";
import TxHistory from "./pages/artist/TxHistory";
import Download from "./pages/artist/Download";
import Like from "./pages/artist/Like";
import Detail from "./pages/Detail";
import FeedbackList from "./pages/artist/FeedbackList";
import { Footer } from "./stories/footer/Footer";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./lib/connectors";
import { login } from "./api/user";
import { atom, useRecoilState } from 'recoil';
import web3 from './web3.js';
import { setDefaultResultOrder } from "dns";
// declare var window: any

const Container = styled.div`
  min-height: 100%;
  padding-bottom: 200px;
  position: relative;
  footer {
    height: 200px;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export interface userInfoTypes {
  address: string,
  acorn: number,
  description: string,
  nickname: string,
  profile_img_url: string,
  result: string
}

export const userInfoState = atom<userInfoTypes>({
  key: 'userInfoState',

  default: {
    address: '',
    acorn: 0,
    description: '',
    nickname: '',
    profile_img_url: '',
    result: '',
  }
})

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleNetworkSwitch = (networkName) => {
  //   // setError();
  //   changeNetwork({ networkName, setError });
  // }
  const {
    connector,
    library,
    chainId,
    account,
    active,
    error,
    activate,
    deactivate,
  } = useWeb3React();
  const [userInfo, setUserInfo] = useRecoilState<userInfoTypes>(userInfoState);

  // 로그인 시나리오 
  // 1 세션에 저장된 address가 존재하는지 확인
  // 2.1 존재한다면 해당 address로 connect를 시도하여 account가 일치하는지 확인
  // 3 account가 일치한다면 로그인을 시도하여 userInfo를 받아와 전역에 저장
  // 2.2 존재하지 않는다면 로그인 시도 안함

  // 계정 주소가 변하면 실행
  useEffect(() => {
    console.log(account);
    console.log(active);
    console.log(connector);
    console.log(chainId);
    console.log(userInfo);
    if (account) {
      console.log(connector?.getChainId().then(res => console.log(res)));
      login(account).then(() => {
        setIsLoggedIn(true);
      }).catch((e) => {
        console.log("로그인 실패>>>>>>");
      });
    }
  }, [account]);

  const onLogin = () => {
    activate(injected, (e) => {
      if (e.message === "No Ethereum provider was found on window.ethereum.") {
        window.open("https://metamask.io/download.html");
      }
    });
  };

  const onLogout = () => {
    deactivate();
    setIsLoggedIn(false);
  };
  return (
    <Container>
      <Router>
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}
          onLogout={onLogout}
          onCreateAccount={() => console.log("login")}
        />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="prminting" element={<ParentMinting />} />
          <Route path="cdminting" element={<ChildMinting />} />

          <Route path="prlist" element={<ParentList />} />
          <Route path="cdlist" element={<ChildList />} />

          <Route path="detail/:tokenId" element={<Detail />} />

          <Route path="artist/:userAddress" element={<Artist />}>
            <Route path="nft" element={<NFTList />} />
            <Route path="feedback" element={<FeedbackList />} />
            <Route path="history" element={<TxHistory />} />
            <Route path="download" element={<Download />} />
            <Route path="like" element={<Like />} />
          </Route>

          <Route path="feedback/:articleNo" element={<Feedback />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
};

export default AppRouter;
