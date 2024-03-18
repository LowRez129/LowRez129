import styled from "styled-components";

const ProjectsSectionContainer = styled.section`
    display: grid;
    grid-template-rows: 50px;
    background-color: white;
`;

const ProjectsHeader = styled.div`
    display: grid;
    background-color: deepskyblue;
    font-size: xx-large;
    justify-items: center;
    align-items: center;
    border: solid black;
`;

const ProjectsContainer = styled.div`
    display: grid;
`;

export { ProjectsSectionContainer, ProjectsHeader, ProjectsContainer };