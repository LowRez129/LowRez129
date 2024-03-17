import styled from "styled-components";

const SkillIconContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 20%;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
`;

const IconName = styled.div`
    background-color: wheat;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export { SkillIconContainer, Icon, IconName };