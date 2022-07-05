import styled, { css } from "styled-components";

export const Header = styled.main`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 1px solid #f4f5f9;
    cursor: default;
    width: 100vw;
  `}
`;

export const HeaderLogo = styled.img`
  ${() => css`
    width: 190px;
    height: auto;
    margin: 1.2rem;
    cursor: pointer;
  `}
`;

export const HeaderSection = styled.section`
  ${() => css`
    display: flex;
    justify-content: center;
    margin: 1.2rem;
  `}
`;

export const HeaderDiv = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    margin: 0 1rem;
  `}
`;

export const HeaderComponents = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 .5rem;
    p {
        font-size: 0.8rem;
        font-family: "Montserrat";
    }
  `}
`;

export const HeaderImg = styled.img`
    ${() => css`
        width: 30px;
        height: auto;
        cursor: pointer;
    `}
`

export const HeaderDescrip = styled.strong`
    ${() => css`
        font-size: 1rem;
        font-weight: bold;
        font-family: "Montserrat";
    `}
`
