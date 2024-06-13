import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const TopicContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
`

export const AvatarTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0.25;
`

export const TopicDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

export const TopicDescriptionDate = styled.span``

export const TopicDescriptionArea = styled.textarea`
  outline: none;
  resize: none;
  border-radius: 8px;
`