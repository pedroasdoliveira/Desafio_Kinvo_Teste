import styled, {css} from "styled-components";

export const Dashboard = styled.div`
    ${({theme}) => css`
        background-color: #EEF2F4;
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0;
    ` }
`;
