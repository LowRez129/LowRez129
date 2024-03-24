import styled from "styled-components";

const IconContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
    background-color: black;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(9, 250px);
        grid-template-rows: 1fr;
    }
`;

export { IconContainer };