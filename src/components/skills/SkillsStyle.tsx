import styled from "styled-components";

const SkillsContainer = styled.section`
    display: grid;
    grid-template-rows: 50px;
    background-color: dodgerblue;
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
    gap: 10px;
    padding: 10px;
    margin: 10px;
    justify-self: center;
    align-self: center;
    background-color: black;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(8, 125px);
        grid-template-rows: repeat(1, 125px);
    }
`;

export { SkillsContainer, SkillsHeader, IconContainer };