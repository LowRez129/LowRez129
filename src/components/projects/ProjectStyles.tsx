import styled from "styled-components";

const ProjectContainer = styled.div`
    display: grid;
    background-color: aquamarine;
    grid-template-columns: 60% 1fr;
    grid-template-rows: 1fr 10% 1fr;
    grid-template-areas: 
        "project_image button_container"
        "project_name project_name"
        "project_description project_description"
    ;
`;

const ProjectImage = styled.img`
    height: 200px;
    width: 200px;
    padding: 10px;
    justify-self: center;
    align-self: center;
    grid-area: project_image;
`;

const LinkButtonContainer = styled.div`
    display: grid;
    grid-area: button_container;
    justify-self: center;
    align-self: center;
    gap: 10px;
`;

const LinkButton = styled.button`
    background-color: green;
    &:active {
        background-color: yellowgreen;
    }
`;

const ProjectName = styled.div`
    background-color: dodgerblue;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-area: project_name;
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