// Profile.tsx 
import React from 'react';
import styled from "styled-components";
import { ProfileImg } from './ProfileImg';

const ProfileContainer = styled.div`
    font-family: "SUIT", sans-serif;
    font-weight: 600;
    /* border: solid 2px; */
    border-color: black;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 233.33px;
    height: 104px;
    padding-left: 0px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 768px) {
        justify-content: left;
        padding-left: 8vw;
    }
`;

const ProfileImage = styled.img`

`;

// const StyledProfileImg = styled.img<{ size: string }>`
//     border: 2px;
//     border-radius: 400px;
//     width: ${props => props.size};
//     height: ${props => props.size};
// `;
const StyledProfileImgContainer = styled.div`
    margin: 16px;
`;

const ProfileDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* color: white; */
    justify-items: center;
    margin-right: 16px;
    margin-top: 25px;
    margin-bottom: 25px;
`;

// const StyledProfileImg = styled.img`

// `;

const StyledProfileNickname = styled.span`
    font-size: 20px;
    color: #6667AB;
    font-weight: 700;
`;

const StyledProfileLevel = styled.span`
    font-size: 14px;
    color: #8393AF;
    font-weight: 400;
`;

interface ProfileProps {
    children?: React.ReactElement | string;
    profileImgUrl: string;
    profileNickname: string;
    profileLevel: string;
    size: string;
    onClick?: () => void;
}

interface ProfileImgProps {
    size: string;
    profileImgUrl: string;
}

function Profile({
    children,
    profileImgUrl,
    profileNickname,
    profileLevel,
    size,
    ...props
}: ProfileProps) {
    return (
        <ProfileContainer>
            {/* <StyledProfileImg size={size} src={profileImgUrl} /> */}
            {/* {children} */}
            {/* <StyledProfileImg src={profileImgUrl} alt="profile" /> */}
            <StyledProfileImgContainer>
                <ProfileImg size={size} profileImgUrl={profileImgUrl} />
            </StyledProfileImgContainer>
            <ProfileDescriptionContainer>
                <StyledProfileNickname>{profileNickname}</StyledProfileNickname>
                <StyledProfileLevel>{profileLevel}</StyledProfileLevel>
            </ProfileDescriptionContainer>
        </ProfileContainer>
    )
}

export default Profile;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              