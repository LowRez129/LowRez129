import { LinkButton, LinkButtonContainer, ProjectContainer, ProjectDescription, ProjectImage, ProjectName } from "./ProjectStyles";

export default function Project ({ src, name, description } : { src: string, name: string, description: string }) {
    const neolexicon_website = "https://neolexicon-client.onrender.com";
    const neolexicon_github = "https://github.com/LowRez129/neolexicon";
    const goto_neolexicon_website = () => window.location.href = neolexicon_website;
    const goto_neolexicon_github = () => window.location.href = neolexicon_github;

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