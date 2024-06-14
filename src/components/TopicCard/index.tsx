import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineHeart } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

import AvatarImage from "../AvatarImage";
import { CardContainer, CommentsAndLikesContainer, TopicDescription, TopicInformationsContainer, TopicTitle } from "./style";
import { ITopicCardsComponentProps } from '../../interfaces/Topics';

function TopicCard (topicProps: ITopicCardsComponentProps) {
  const navigate = useNavigate()
  const [topicLiked, setTopicLiked] = useState(false)
  const [windowWidth] = useState(document.documentElement.clientWidth)

  return (
    <CardContainer>
      <AvatarImage 
          avatarSourceLink={topicProps.avatarProps?.avatarSourceLink} 
          avatarAltTitle={topicProps.avatarProps?.avatarAltTitle} 
          avatarTitle={topicProps.avatarProps?.avatarTitle}
        />
      <TopicInformationsContainer onClick={() => {navigate(`/posts/${topicProps.topicId}`, {replace: true, state: topicProps})}}>
        <TopicTitle>{topicProps.topicTitle}</TopicTitle>
        <TopicDescription>{topicProps.topicDescription}</TopicDescription>
      </TopicInformationsContainer>
      <CommentsAndLikesContainer>
        <span><HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>{topicProps.likesQuantity}</span>
        <span><FaRegComment size={windowWidth > 979 ? 30 : 25} fill=''/>{topicProps.commentsQuantity}</span>
      </CommentsAndLikesContainer>
    </CardContainer>
  )
}

export default TopicCard;