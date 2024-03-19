import styled from "styled-components";

const SkillIconContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 1fr;
    gap: 10px;
    transition: transform 0.5s;
    background-color: black;
    &:hover {
        transform: translateY(-5px);
    }
`;

const Icon = styled.img`
    height: 80%;
    width: 80%;
    padding: 10%;
    background-color: cornflowerblue;
`;

const IconName = styled.div`
    background-color: deepskyblue;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export { SkillIconContainer, Icon, IconName };