import { IconContainer, SkillsContainer, SkillsHeader } from "./SkillsStyle";
import { 
    postgres_icon, express_icon, react_icon, node_js_icon, 
    ts_icon, js_icon, html_icon, css_icon, git_icon
} from "./IconSVG";

import SkillIcon from "./SkillIcon";

export default function Skills () {
    return (
        <SkillsContainer>
            <IconContainer>
                <SkillIcon src={postgres_icon} name="Postgresql"/>
                <SkillIcon src={express_icon} name="Express"/>
                <SkillIcon src={react_icon} name="React"/>
                <SkillIcon src={node_js_icon} name="Node.js"/>
                <SkillIcon src={ts_icon} name="Typescript"/>
                <SkillIcon src={js_icon} name="Javascript"/>
                <SkillIcon src={html_icon} name="HTML"/>
                <SkillIcon src={css_icon} name="CSS"/>
                <SkillIcon src={git_icon} name="Git"/>
            </IconContainer>
        </SkillsContainer>
    )
}