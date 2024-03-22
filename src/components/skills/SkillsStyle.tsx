import styled from "styled-components";

const IconContainer = styled.div`
    background-color: yellow;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
    background-color: black;
    overflow: scroll;
`;

export { IconContainer };