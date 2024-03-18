import styled from "styled-components";

const ProjectContainer = styled.div`
    display: grid;
    background-color: aquamarine;
    grid-template-columns: 100vw;
    grid-template-rows: 1fr 10% 1fr;
`;

const ProjectImage = styled.img`
    height: 100%;
    width: 100%;
`;

const ProjectName = styled.div`
    background-color: dodgerblue;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const ProjectDescription = styled.div`
    background-color: deepskyblue;
    padding: 10px;
    overflow-wrap: break-word;
`;

export { ProjectContainer, ProjectImage, ProjectName, ProjectDescription };