import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

export const GroupsContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid ${(theme.colors.MAIN_BLUE)};
  justify-content: flex-start;
  border-radius: 10px;
  width: 92vw;
  min-height: 400px;

  & > h1 {
    font-size: 3rem;
    border-bottom: 1px solid ${(theme.colors.MEDIUM_GRAY)};
    margin: 30px 0;
    width: 90%;

    @media (min-width: 980px) {
      width: 58%;
    }
  }

  @media (min-width: 980px) {
    width: 70vw;
  }
`

export const GroupsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 85%;
  padding: 20px 0;
`

export const Group = styled.article`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 3px solid ${(theme.colors.MAIN_BLUE)};
  justify-content: space-between;
  border-radius: 10px;
  width: 90%;
  padding: 12px 20px;

  & > div {
    flex: 1;
    padding-left: 20px;
  }

  & > div > span {
    font-size: 1.5rem;
  }

  @media (min-width: 980px) {
    width: 60%;
    padding: 12px 40px;
  }
`