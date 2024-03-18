import styled from "styled-components";

const SkillsContainer = styled.section`
    display: grid;
    grid-template-rows: 50px;
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    background-color: dodgerblue;
    gap: 20px;
    padding: 50px;
`;

export { SkillsContainer, SkillsHeader, IconContainer };