import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaRegComment, FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

import AvatarImage from "../AvatarImage";
import { CardContainer, CommentsAndLikesContainer, TopicDescription, TopicInformationsContainer, TopicTitle } from "./style";
import { ITopicCardsComponentProps } from '../../interfaces/Topics';

function TopicCard (topicProps: ITopicCardsComponentProps) {
  const navigate = useNavigate()
  const [topicLiked, setTopicLiked] = useState(false)
  const [topicDisliked, setTopicDisliked] = useState(false)
  const [windowWidth] = useState(document.documentElement.clientWidth)

  const handleLikesAndDislike = (optionRequired: string) => {
    if (optionRequired === 'LIKE') {
      setTopicLiked(true)
      setTopicDisliked(false)
    }

    if (optionRequired === 'DISLIKE') {
      setTopicDisliked(true)
      setTopicLiked(false)
    }
  }

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
        <span><FaRegThumbsUp size={windowWidth > 979 ? 30 : 25} onClick={() => handleLikesAndDislike("LIKE")} fill={topicLiked ? '#19dd19' : '#000'}/>{topicProps.likesQuantity}</span>
        <span><FaRegThumbsDown size={windowWidth > 979 ? 30 : 25} onClick={() => handleLikesAndDislike("DISLIKE")} fill={topicDisliked ? '#ff2929' : '#000'}/>{topicProps.likesQuantity}</span>
        <span><FaRegComment size={windowWidth > 979 ? 30 : 25} fill=''/>{topicProps.commentsQuantity}</span>
      </CommentsAndLikesContainer>
    </CardContainer>
  )
}
export default TopicCard;