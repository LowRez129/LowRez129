import styled from "styled-components";

const SkillsContainer = styled.section`
    display: grid;
    background-color: deepskyblue;
`;

const SkillsHeader = styled.div`
    background-color: deepskyblue;
    font-size: xx-large;
    display: grid;
    justify-content: center;
    align-items: center;
    border: solid black;
`;

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
    background-color: black;
`;

export { SkillsContainer, SkillsHeader, IconContainer };