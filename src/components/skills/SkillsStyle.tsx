import styled from "styled-components";

const SkillsContainer = styled.section`
    display: grid;
`;

const SkillsHeader = styled.div`
    background-color: antiquewhite;
`;

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    background-color: blueviolet;
`;

export { SkillsContainer, SkillsHeader, IconContainer };