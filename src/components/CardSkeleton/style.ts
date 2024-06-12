import styled, { keyframes } from "styled-components";
import theme from "../../global/styles/theme";

const skeletonAnimation = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`

export const CardContainer = styled.div`
  border-radius: 10px;
  border: 2px solid ${(theme.colors.LIGHTER_GRAY)};
  display: flex;
  align-items: center;
  height: 80px;
  width: 76vw;
  padding: 0 20px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  
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
  border: 3px solid ${(theme.colors.DARKER_GRAY)};
  padding: 10px;
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  width: 20%;
  margin-bottom: 5px;
`

export const TopicDescription = styled.span`
  color: ${(theme.colors.BLACK)};
  animation: ${skeletonAnimation} 1s linear infinite alternate;
  border: 3px solid ${(theme.colors.DARKER_GRAY)};
  padding: 10px;
  width: 50%;
`

export const AvatarSkeleton = styled.div`
  border-radius: 50%;
  border: 3px solid ${(theme.colors.DARKER_GRAY)};
  width: 45px;
  height: 44px;

  @media (min-width: 980px) {
    width: 60px;
    height: 60px;
  }
`