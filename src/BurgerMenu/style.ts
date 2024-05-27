import styled from "styled-components";
import theme from "../global/styles/theme";

export const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${(theme.colors.WHITE)};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
    }

    @media (min-width: 980px) {
      display: none;
    }
`;

export const StyledCloseMenu = styled.button`
display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 11;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${(theme.colors.WHITE)};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      &:first-child {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }

    @media (min-width: 980px) {
      display: none;
    }
`

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    background: ${(theme.colors.MAIN_BLUE)};
    height: 101vh;
    padding: 2rem;
    position: absolute;
    top: 68px;
    right: 0;
    z-index: 10;

    a {
      font-size: 1.5rem;
      text-align: center;
      text-transform: uppercase;
      padding: 1.2rem 0;
      letter-spacing: 0.5rem;
      color: ${( theme.colors.WHITE)};
      transition: color 0.3s linear;
    }
  }
`;