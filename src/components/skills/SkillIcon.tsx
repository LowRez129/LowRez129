import { Icon, IconName, SkillIconContainer } from "./SkillIconStyles";

interface SkillIconProp {
    src: string, 
    name: string
}

export default function SkillIcon ({src, name} : SkillIconProp) {
    return (
        <SkillIconContainer>
            <Icon src={src} alt={name}/>
            <IconName>{name}</IconName>
        </SkillIconContainer>
    )
} 