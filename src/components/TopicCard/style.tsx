import styled from "styled-components";
import theme from "../../global/styles/theme";

export const CardContainer = styled.div`
  border-radius: 10px;
  border: 2px solid ${(theme.colors.MAIN_BLUE)};
  display: flex;
  align-items: center;
  height: 80px;
  width: 76vw;
  padding: 0 20px;
  cursor: pointer;
  
  @media (min-width: 980px) {
    width: 60vw;
  }
`

export const TopicInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex-grow: 1;
`

export const TopicTitle = styled.h2`
  color: ${(theme.colors.BLACK)};
  font-weight: 700;
  font-size: 30px;
`

export const TopicDescription = styled.span`
  color: ${(theme.colors.BLACK)};
  font-size: 15px;
`

export const CommentsAndLikesContainer = styled.div`
  display: flex;
  
  &  > span {
    margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
`