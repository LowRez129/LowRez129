import styled from "styled-components";

const SkillIconContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 1fr;
    transition: transform 0.5s;
    &:hover,
    &:active {
        position: static;
        transform: translateY(-50px);
    }
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: cornflowerblue;
`;

const IconName = styled.div`
    background-color: deepskyblue;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export { SkillIconContainer, Icon, IconName };