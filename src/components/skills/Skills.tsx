import { Icon, IconContainer, SkillsContainer, SkillsHeader } from "./SkillsStyle";
import postgres_icon from "../../assets/postgresql-svgrepo-com.svg";
import express_icon from "../../assets/express-svgrepo-com.svg";
import react_icon from "../../assets/react-svgrepo-com.svg";
import node_js_icon from "../../assets/node-js-svgrepo-com.svg";
import SkillIcon from "./SkillIcon";

export default function Skills () {
    return (
        <SkillsContainer>
            <SkillsHeader>Skills:</SkillsHeader>
            <IconContainer>
                <SkillIcon src={postgres_icon} name="Postgresql"/>
                <SkillIcon src={express_icon} name="Express"/>
                <SkillIcon src={react_icon} name="React"/>
                <SkillIcon src={node_js_icon} name="Node.js"/>
                <SkillIcon src={postgres_icon} name="Postgresql"/>
                <SkillIcon src={express_icon} name="Express"/>
                <SkillIcon src={postgres_icon} name="Postgresql"/>
                <SkillIcon src={express_icon} name="Express"/>
            </IconContainer>
        </SkillsContainer>
    )
}