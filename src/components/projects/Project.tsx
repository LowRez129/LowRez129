import { LinkButton, LinkButtonContainer, ProjectContainer, ProjectDescription, ProjectImage, ProjectName } from "./ProjectStyles";

interface ProjectType { 
    src: string, 
    name: string, 
    description: string,
    website: string,
    github: string
}

export default function Project ({ src = "", name = "<name>", description = "<description>", website = "", github = "" } : ProjectType) {
    const goto_neolexicon_website = () => window.location.href = website;
    const goto_neolexicon_github = () => window.location.href = github;

    return (
        <ProjectContainer>
            <ProjectImage src={src} alt={name}/>
            <LinkButtonContainer>
                <ProjectName>{name}:</ProjectName>
                <LinkButton onClick={goto_neolexicon_website}>&gt;Website&lt;</LinkButton>
                <LinkButton onClick={goto_neolexicon_github}>&gt;Github Repo&lt;</LinkButton>
            </LinkButtonContainer>
            <ProjectDescription>{description}</ProjectDescription>
        </ProjectContainer>
    )
}