import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  width: 60%;
  padding: 20px;
  height: 50%;
`

export const AvatarContainer = styled.div`
  border-right: 1px solid #000;
  height: 80%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > span {
    font-size: 1.25rem;
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

  & > div {
    width: auto;
  }
`