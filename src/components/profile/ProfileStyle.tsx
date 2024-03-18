import styled from "styled-components";

const ProfileContainer = styled.section`
    display: grid;
    gap: 10px;
    background-color: dodgerblue;
    grid-template-columns: 60% 1fr;
    grid-template-areas:
        "profile_header profile_header"
        "picture icon_container"
        "profile_name icon_container"
        "description description"
    ;
`;

const ProfileHeader = styled.div`
    background-color: deepskyblue;
    font-size: xx-large;
    display: grid;
    justify-content: center;
    align-items: center;
    border: solid black;
    grid-area: profile_header;
`;

const ProfilePicture = styled.img`
    height: 200px;
    width: 200px;
    background-color: deepskyblue;
    justify-self: center;
    grid-area: picture;
    border: solid black;
`;

const ProfileName = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    grid-area: profile_name;
    margin: 10px;
    height: 50px;
    border: solid black;
`;

const ProfileDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    margin: 10px;
    grid-area: description;
`;

const LinkIconContainer = styled.div`
    display: grid;
    gap: 10px;
    padding: 10px;
    grid-template-columns: 70px;
    grid-template-rows: repeat(3, 1fr);
    grid-area: icon_container;
    justify-self: center;
    align-items: center;
    background-color: dodgerblue;
    border: solid black;
`;

const LinkIcon = styled.img`
    background-color: antiquewhite;
    height: 100%;
    width: 100%;
`;

export { 
    ProfileContainer, ProfileHeader, ProfilePicture, ProfileName, 
    ProfileDescription, LinkIconContainer, LinkIcon 
};