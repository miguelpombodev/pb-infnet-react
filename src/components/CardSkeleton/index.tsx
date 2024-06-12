import { AvatarSkeleton, CardContainer, TopicDescription, TopicInformationsContainer, TopicTitle } from "./style"

function CardSkeleton () {
  return (
    <CardContainer>
      <AvatarSkeleton />
      <TopicInformationsContainer>
        <TopicTitle />
        <TopicDescription />
      </TopicInformationsContainer>
    </CardContainer>
  )
}

export default CardSkeleton