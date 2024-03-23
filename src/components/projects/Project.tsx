import { LinkButton, LinkButtonContainer, ProjectContainer, ProjectDescription, ProjectImage, ProjectName } from "./ProjectStyles";

interface ProjectType { 
    src: string, 
    name: string, 
    description: string,
    website: string,
    github: string
}

export default function Project ({ src, name, description, website, github } : ProjectType) {
    const goto_neolexicon_website = () => window.location.href = website;
    const goto_neolexicon_github = () => window.location.href = github;

    return (
        <ProjectContainer>
            <ProjectImage src={src}/>
            <LinkButtonContainer>
                <ProjectName>{name}</ProjectName>
                <LinkButton onClick={goto_neolexicon_website}>&lt;Website&gt;</LinkButton>
                <LinkButton onClick={goto_neolexicon_github}>&lt;Github Repo&gt;</LinkButton>
            </LinkButtonContainer>
            <ProjectDescription>{description}</ProjectDescription>
        </ProjectContainer>
    )
}