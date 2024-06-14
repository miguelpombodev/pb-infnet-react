import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  width: 81vw;
  padding: 20px;
  height: 50%;
  flex-direction: column;

  @media (min-width: 980px) {
  flex-direction: row;
  width: 60%;
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > span {
    font-size: 1.25rem;
  }

  @media (min-width: 980px) {
  border-right: 1px solid #000;
  height: 80%;
    padding: 0 20px;
  }
`

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`

export const TopicsHeaderContainer = styled.div`
  border-bottom: 1px solid #000;
  width: 80%;
  text-align: center;

  & > h1 {
    font-size: 2.5rem;
  }
`

export const TopicsListContainer = styled.div`
  width: 90%;
  padding: 20px 0;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
  }
`

export const NoTopicsMessage = styled.span`
  font-size: 1.5rem;
  color: ${(theme.colors.LIGHTER_GRAY)};
`