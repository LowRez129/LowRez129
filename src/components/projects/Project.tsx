import { ProjectContainer, ProjectDescription, ProjectImage, ProjectName } from "./ProjectStyles";

export default function Project ({ src, name, description } : { src: string, name: string, description: string }) {
    return (
        <ProjectContainer>
            <ProjectImage src={src}/>
            <ProjectName>{name}</ProjectName>
            <ProjectDescription>{description}</ProjectDescription>
        </ProjectContainer>
    )
}