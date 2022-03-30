import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThumbnailGrid } from "../../stories/thumbnail/ThumbnailGrid";
import { useMediaQuery } from "react-responsive";
import { getNFTList } from "../../api/artist";
import { useRecoilValue } from "recoil";
import { userInfoState, userInfoTypes } from "../..";
import { ThumbnailProps } from "../../stories/thumbnail/Thumbnail";
import { useParams } from "react-router-dom";

const dummyItemList = [
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
  {
    nickname: "",
    itemTitle: "",
    owner_address: "",
    like: 0,
    itemHash: "",
  },
];

const Container = styled.div`
  display: flex;
  margin: auto;
  padding: 5rem 2rem;
  justify-content: center;
`;

const OwnedNFTList = () => {
  const isPc = useMediaQuery({ minWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 500 });
  const columnCount = isPc ? 4 : isTablet ? 3 : 3;
  const gridSize = isPc ? "52rem" : isTablet ? "40rem" : "20rem";
  // const userInfo = useRecoilValue<userInfoTypes>(userInfoState);
  const { userAddress } = useParams();
  const [itemList, setItemList] = useState<ThumbnailProps[]>();
  useEffect(() => {
    if (userAddress) {
      getNFTList(userAddress).then((res) => {
        console.log(res);
        if (res.data.result !== "작품 목록이 없습니다.") {
          setItemList(res.data.data);
        }
      });
    }
  }, []);
  return (
    <Container>
      {itemList ? (
        <ThumbnailGrid
          itemList={itemList}
          size={gridSize}
          columnCount={columnCount}
        ></ThumbnailGrid>
      ) : (
        <div>아직 소유한 작품이 없습니다.</div>
      )}
    </Container>
  );
};

export default OwnedNFTList;
