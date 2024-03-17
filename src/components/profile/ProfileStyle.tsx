import styled from "styled-components";

const ProfileContainer = styled.section`
    display: grid;
    background-color: burlywood;
    grid-auto-flow: row;
`;

const ProfilePicture = styled.img`
    height: 200px;
    width: 200px;
    background-color: yellow;
    justify-self: center;
`;

const ProfileName = styled.div`
    text-align: center;
`;

const ProfileDescription = styled.div`
    padding: 10px;
`;

export { ProfileContainer, ProfilePicture, ProfileName, ProfileDescription };