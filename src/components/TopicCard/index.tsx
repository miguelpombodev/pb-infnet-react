import { useState } from 'react'
import { HiOutlineHeart } from "react-icons/hi";

import AvatarImage from "../AvatarImage";
import { CardContainer, TopicDescription, TopicInformationsContainer, TopicTitle } from "./style";

interface IAvatarProps {
  avatarSourceLink: string
  avatarAltTitle: string
  avatarTitle: string
}

interface ITopicCardsProps {
  topicTitle: string,
  topicDescription: string,
  avatarProps: IAvatarProps
}

function TopicCard ({topicDescription, topicTitle, avatarProps }: ITopicCardsProps) {
  const [topicLiked, setTopicLiked] = useState(false)

  return (
    <CardContainer>
      <AvatarImage avatarSourceLink={avatarProps.avatarSourceLink} avatarAltTitle={avatarProps.avatarAltTitle} avatarTitle={avatarProps.avatarTitle}/>
      <TopicInformationsContainer>
        <TopicTitle>{topicDescription}</TopicTitle>
        <TopicDescription>{topicTitle}</TopicDescription>
      </TopicInformationsContainer>
      <div>
        <HiOutlineHeart onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>
      </div>
    </CardContainer>
  )
}

export default TopicCard;