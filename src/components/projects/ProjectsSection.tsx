import Project from "./Project.tsx";
import { ProjectsSectionContainer } from "./ProjectsSectionStyles.tsx";
import { neolexicon } from "./Details.ts";

export default function ProjectsSection () {
    return (
        <ProjectsSectionContainer>
            <Project 
                src={neolexicon.src} 
                name={neolexicon.name} 
                description={neolexicon.description}
                website={neolexicon.website}
                github={neolexicon.github}
            />
            <Project 
                src={neolexicon.src} 
                name={neolexicon.name} 
                description={neolexicon.description}
                website={neolexicon.website}
                github={neolexicon.github}
            />
            <Project 
                src={neolexicon.src} 
                name={neolexicon.name} 
                description={neolexicon.description}
                website={neolexicon.website}
                github={neolexicon.github}
            />
        </ProjectsSectionContainer>
    )
}