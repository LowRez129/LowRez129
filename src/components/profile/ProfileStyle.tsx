import styled from "styled-components";

const ProfileContainer = styled.section`
    display: grid;
    background-color: dodgerblue;
    gap: 10px;
`;

const ProfileHeader = styled.div`
    background-color: deepskyblue;
    font-size: xx-large;
    display: grid;
    justify-content: center;
    align-items: center;
    border: solid black;
`;

const ProfilePicture = styled.img`
    height: 200px;
    width: 200px;
    background-color: deepskyblue;
    justify-self: center;
`;

const ProfileName = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
`;

const ProfileDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    margin: 10px;
`;

export { ProfileContainer, ProfileHeader, ProfilePicture, ProfileName, ProfileDescription };