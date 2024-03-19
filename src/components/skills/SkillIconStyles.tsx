import styled from "styled-components";

const SkillIconContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 1fr;
    gap: 5px;
    padding: 5px;
    background-color: black;
    transition: transform 0.5s;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
    background-color: cornflowerblue;
`;

const IconName = styled.div`
    background-color: deepskyblue;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export { SkillIconContainer, Icon, IconName };