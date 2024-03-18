import Project from "./Project";
import { ProjectsContainer, ProjectsHeader, ProjectsSectionContainer } from "./ProjectsSectionStyles";

export default function ProjectsSection () {
    return (
        <ProjectsSectionContainer>
            <ProjectsHeader>Projects:</ProjectsHeader>
            <ProjectsContainer>
                <Project src="" name="Testing"/>
                <Project src="" name="WHAT"/>
            </ProjectsContainer>
        </ProjectsSectionContainer>
    )
}