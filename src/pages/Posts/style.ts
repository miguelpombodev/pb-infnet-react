import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(theme.colors.DARKER_GRAY)};
`

export const GroupCardContainer = styled.div`
  padding: 15px 10px;
  background-color: ${(theme.colors.WHITE)};
  margin: 20px 0;
  border-radius: 10px;

  & > h1 {
    font-size: 2.5rem;
  }
`

export const GroupCardList = styled.div`
  & > div {
    margin-top: 10px;
  }
`