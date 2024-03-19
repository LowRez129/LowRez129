import styled from "styled-components";

const ProjectContainer = styled.div`
    display: grid;
    background-color: rgb(127, 255, 212);
    grid-template-columns: 60% 1fr;
    grid-template-rows: 1fr 10% 1fr;
    grid-template-areas: 
        "project_image project_image"
        "button_container button_container"
        "project_description project_description"
    ;

    @media screen and (min-width: 600px) {
        grid-template-columns: 20% 1fr;
        grid-template-rows: 20% 80%;
        grid-template-areas: 
            "project_image button_container button_container"
            "project_image project_description project_description"
        ;
    }
`;

const ProjectImage = styled.img`
    height: 200px;
    width: 200px;
    padding: 20px;
    background-color: yellow;
    justify-self: center;
    align-self: center;
    grid-area: project_image;
`;

const LinkButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-area: button_container;
    background-color: dodgerblue;
`;

const LinkButton = styled.button`
    background-color: dodgerblue;
    border: none;
    &:hover,
    &:active {
        background-color: yellowgreen;
    }
`;

const ProjectName = styled.div`
    justify-self: center;
    align-self: center;
`;

const ProjectDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    overflow-wrap: break-word;
    grid-area: project_description;
`;

export { 
    ProjectContainer, ProjectImage, LinkButtonContainer, 
    LinkButton, ProjectName, ProjectDescription 
};