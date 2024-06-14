import styled from "styled-components";
import theme from "../../global/styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(theme.colors.MAIN_BLUE)};
  color: ${(theme.colors.WHITE)};
  height: 3rem;
  font-size: larger;
  padding: 10px;

  @media (min-width: 980px) {
    padding: 0;
    height: 3.5rem;
  }
`
export const LinkOptionsContainer = styled.nav`
  display: none;

  @media (min-width: 980px) {
    display: flex;
    justify-content: space-evenly;
    width: 20%;
    
    & > a {
      cursor: pointer;
    }

    & > a:visited {
      color: #fff;
    }

    & >a:link {
      text-decoration: none;
      color: #fff;
    }
  }
`
export const LinkBurgerOptionsContainer = styled.div`
  display: flex;
    justify-content: space-evenly;
    width: 20%;
    flex-direction: column;
    
    & >a:link {
      text-decoration: none;
      color: #fff;
    }

  @media (min-width: 980px) {
    display: none;
  }
`

export const SearchInputContainer = styled.div`
  height: 35%;
  border-radius: 8px;
  background-color: ${(theme.colors.WHITE)};
  display: flex;
  align-items: center;
  width: 30%;
  padding: 10px;
  justify-content: space-between;

  & > svg {
    fill: ${(theme.colors.BLACK)};
  }

  @media (min-width: 980px) {
    height: 40%;
    width: 20%;
  }
`

export const SearchInput = styled.input`
  border: none;
  width: 90%;
  height: 100%;
  font-size: 1rem;
  outline: none;
`