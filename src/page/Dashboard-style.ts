import styled, {css} from "styled-components";

export const Dashboard = styled.div`
    ${({theme}) => css`
        background-color: #EEF2F4;
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    ` }
`;

export const AsideDashboard = styled.aside`
    ${() => css`
        display: flex;
        max-width: 225px;
        max-height: 100vh;
    `}
`;

export const MainDashboard = styled.main`
    ${() => css`
        display: flex;
        width: 82%;
    `}
`