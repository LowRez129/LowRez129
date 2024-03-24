import styled from "styled-components";

const ProjectContainer = styled.div`
    display: grid;
    background-color: dodgerblue;
    grid-template-columns: 60% 1fr;
    grid-template-rows: 1fr 20% 1fr;
    grid-template-areas: 
        "project_image project_image"
        "project_name button_container"
        "project_description project_description"
    ;

    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 20% 1fr;
        grid-template-areas: 
            "project_image project_name button_container"
            "project_image project_description project_description"
        ;
    }
`;

const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
    background-color: cornflowerblue;
    grid-area: project_image;
`;

const LinkButtonContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-area: button_container;
    box-sizing: border-box;
    padding: 5px;
    gap: 5px;
    background-color: deepskyblue;
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
    grid-area: project_name;
`;

const ProjectDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    overflow-wrap: break-word;
    overflow: auto;
    grid-area: project_description;
`;

export { 
    ProjectContainer, ProjectImage, LinkButtonContainer, 
    LinkButton, ProjectName, ProjectDescription 
};