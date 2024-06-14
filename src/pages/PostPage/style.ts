import styled from "styled-components";
import theme from "../../global/styles/theme";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
  `

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 90vw;
  background-color: ${(theme.colors.MAIN_BLUE)};
  border-radius: 10px;
  padding: 5px 10px;

  & > h1 {
    font-size: 3rem;
    font-weight: 700;
    width: 100%;
    color: ${(theme.colors.WHITE)};
  }

  & > span {
    color: ${(theme.colors.MEDIUM_GRAY)};
  }
`

export const TopicContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  border: 2px solid ${(theme.colors.MAIN_BLUE)};
  padding: 10px;
  flex-direction: column;
  border-radius: 8px;

  @media (min-width: 980px) {
      flex-direction: row;
      font-size: 33px;
  }
`

export const AvatarTopicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.25;
  width: 90%;
  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > div > p {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  & > div > span {
    font-size: 1rem;
    margin-top: 10px;
  }

  @media (min-width: 980px) {
    justify-content: center;
    flex-direction: column;
  }

`

export const AvatarBadge = styled.span`
  padding: 8px;
  font-weight: 700;
  border-radius: 10px;
  font-size: 0.85rem;
  background-color: ${(theme.colors.MAIN_BLUE)};
  color: ${(theme.colors.WHITE)};
  margin-top: 10px;
`

export const TopicDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 10px;
  border: 1px solid ${(theme.colors.BLACK)};
  border-radius: 10px;
  width: 90%;

  & > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(theme.colors.DARKER_GRAY)};
    padding-bottom: 3px;
  }

  & > div > span {
    display: flex;
    width: 5%;
    gap:10px;
  }

  @media (min-width: 980px) {
      width: auto;
  }
`

export const TopicDescriptionDate = styled.span`
font-size: 1.5rem;
`

export const TopicDescriptionArea = styled.textarea`
  outline: none;
  resize: none;
  border-radius: 8px;
  border: none;
  padding-top: 10px;
`

export const NewCommentContainer = styled.div`
  background-color: ${(theme.colors.MAIN_BLUE)};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  border-radius: 10px;
  padding: 20px;
  width: 89vw;
`

export const NewCommentInput = styled.textarea`
  border: none;
  background-color: ${(theme.colors.WHITE)};
  padding: 20px;
  outline: none;
  flex: 1;
  margin-right: 35px;
  border-radius: 10px;
  resize: none;
`

export const NewCommentButton = styled.button`
  border: none;
  background-color: ${(theme.colors.WHITE)};
  color: ${(theme.colors.MAIN_BLUE)};
  padding: 20px;
  padding: 15px 35px;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
`