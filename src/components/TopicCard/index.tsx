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
  avatarProps?: IAvatarProps
}

function TopicCard ({topicDescription, topicTitle, avatarProps }: ITopicCardsProps) {
  const [topicLiked, setTopicLiked] = useState(false)
  const [windowWidth, _] = useState(document.documentElement.clientWidth)

  return (
    <CardContainer>
      <AvatarImage 
          avatarSourceLink={avatarProps?.avatarSourceLink || "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png"} 
          avatarAltTitle={avatarProps?.avatarAltTitle || "default_user"} 
          avatarTitle={avatarProps?.avatarTitle || "default_user"}
        />
      <TopicInformationsContainer>
        <TopicTitle>{topicTitle}</TopicTitle>
        <TopicDescription>{topicDescription}</TopicDescription>
      </TopicInformationsContainer>
      <div>
        <HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>
      </div>
    </CardContainer>
  )
}

export default TopicCard;