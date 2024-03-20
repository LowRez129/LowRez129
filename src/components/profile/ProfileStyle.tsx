import styled from "styled-components";

const ProfileContainer = styled.section`
    height: 1fr;
    display: grid;
    gap: 1%;
    padding: 1%;
    background-color: dodgerblue;
    grid-template-columns: 60% 1fr;
    grid-template-areas:
        "profile_header profile_header"
        "picture picture"
        "profile_name icon_container"
        "description description"
    ;

    @media screen and (min-width: 600px) {
        grid-template-columns: 20% 1fr 1fr 1fr;
        grid-template-rows: 15% 20% 1fr;
        grid-template-areas:
            "profile_header profile_header profile_header profile_header"
            "picture profile_name . icon_container"
            "picture description description description"
        ;
    }
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
    height: 100%;
    width: 100%;
    background-color: deepskyblue;
    grid-area: picture;
`;

const ProfileName = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: deepskyblue;
    padding: 10px;
    grid-area: profile_name;
`;

const ProfileDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    grid-area: description;
    overflow: scroll;
`;

const LinkIconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-area: icon_container;
    background-color: dodgerblue;
`;

const LinkIcon = styled.img`
    height: 100%;
    width: 100%;
    background-color: deepskyblue;
    &:hover,
    &:active {
        background-color: greenyellow;
    }
`;

export { 
    ProfileContainer, ProfileHeader, ProfilePicture, ProfileName, 
    ProfileDescription, LinkIconContainer, LinkIcon 
};