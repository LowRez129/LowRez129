import Project from "./Project";
import { ProjectsContainer, ProjectsHeader, ProjectsSectionContainer } from "./ProjectsSectionStyles";
import { neolexicon } from "./Details.ts";

export default function ProjectsSection () {

    return (
        <ProjectsSectionContainer>
            <ProjectsHeader>Projects:</ProjectsHeader>
            <ProjectsContainer>
                <Project src={neolexicon.src} name={neolexicon.name} description={neolexicon.description}/>
            </ProjectsContainer>
        </ProjectsSectionContainer>
    )
}