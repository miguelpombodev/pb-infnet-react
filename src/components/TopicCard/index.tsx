import { useState } from 'react'
import { HiOutlineHeart } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

import AvatarImage from "../AvatarImage";
import { CardContainer, CommentsAndLikesContainer, TopicDescription, TopicInformationsContainer, TopicTitle } from "./style";

interface IAvatarProps {
  avatarSourceLink: string
  avatarAltTitle: string
  avatarTitle: string
}

interface ITopicCardsProps {
  topicId: string,
  topicTitle: string,
  topicDescription: string,
  avatarProps?: IAvatarProps,
  likesQuantity: number,
  commentsQuantity: number
}

function TopicCard ({topicId, topicDescription, topicTitle, avatarProps, likesQuantity, commentsQuantity }: ITopicCardsProps) {
  const [topicLiked, setTopicLiked] = useState(false)
  const [windowWidth] = useState(document.documentElement.clientWidth)

  return (
    <CardContainer>
      <AvatarImage 
          avatarSourceLink={avatarProps?.avatarSourceLink} 
          avatarAltTitle={avatarProps?.avatarAltTitle} 
          avatarTitle={avatarProps?.avatarTitle}
        />
      <TopicInformationsContainer  to={`/posts/${topicId}`}>
        <TopicTitle>{topicTitle}</TopicTitle>
        <TopicDescription>{topicDescription}</TopicDescription>
      </TopicInformationsContainer>
      <CommentsAndLikesContainer>
        <span><HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>{likesQuantity}</span>
        <span><FaRegComment size={windowWidth > 979 ? 30 : 25} fill=''/>{commentsQuantity}</span>
      </CommentsAndLikesContainer>
    </CardContainer>
  )
}

export default TopicCard;