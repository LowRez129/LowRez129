import styled from "styled-components";

const ProjectsSectionContainer = styled.section`
    display: grid;
    grid-template-rows: 100px;
    background-color: yellowgreen;
`;

const ProjectsHeader = styled.div`
    display: grid;
    background-color: rebeccapurple;
    font-size: xx-large;
    justify-items: center;
    align-items: center;
`;

const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
`;

export { ProjectsSectionContainer, ProjectsHeader, ProjectsContainer };