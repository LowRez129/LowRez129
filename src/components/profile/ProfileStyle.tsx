import styled from "styled-components";

const ProfileContainer = styled.section`
    display: grid;
    gap: 10px;
    padding: 10px;
    background-color: dodgerblue;
    grid-template-columns: 60% 1fr;
    grid-template-areas:
        "profile_header profile_header"
        "picture picture"
        "icon_container icon_container"
        "description description"
    ;

    @media screen and (min-width: 600px) {
        grid-template-columns: 20% 1fr;
        grid-template-rows: 10% 20% 1fr;
        grid-template-areas:
            "profile_header profile_header"
            "picture icon_container"
            "picture description"
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
    padding: 10px
`;

const ProfileDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    grid-area: description;
`;

const LinkIconContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-area: icon_container;
    background-color: dodgerblue;
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