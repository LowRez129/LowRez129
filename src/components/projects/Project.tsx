import { ProjectContainer, ProjectImage, ProjectName } from "./ProjectStyles";

export default function Project ({ src, name } : { src: string, name: string }) {
    return (
        <ProjectContainer>
            <ProjectImage src={src}/>
            <ProjectName>{name}</ProjectName>
        </ProjectContainer>
    )
}