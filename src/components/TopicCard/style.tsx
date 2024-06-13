import styled from "styled-components";
import theme from "../../global/styles/theme";
import {Link} from 'react-router-dom'

export const CardContainer = styled.div`
  border-radius: 10px;
  border: 2px solid ${(theme.colors.MAIN_BLUE)};
  display: flex;
  align-items: center;
  height: 80px;
  width: 83vw;
  padding: 0px 10px;
  cursor: pointer;
  
  @media (min-width: 980px) {
    width: 60vw;
  }
`

export const TopicInformationsContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 6px;
  flex-grow: 1;
  overflow: hidden;

  &:link {
    text-decoration: none;
  }
`

export const TopicTitle = styled.h2`
  color: ${(theme.colors.BLACK)};
  font-weight: 700;
  font-size: 19px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 980px) {
    font-size: 30px;
  }
`

export const TopicDescription = styled.span`
  color: ${(theme.colors.BLACK)};
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 980px) {
    font-size: 15px;
  }
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