import { useParams, useLocation } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";

import { AvatarBadge, AvatarTopicContainer, Container, ContainerHeader, TopicContainer, TopicDescriptionArea, TopicDescriptionContainer, TopicDescriptionDate } from "./style";
import AvatarImage from "../../components/AvatarImage";
import { ITopicCardsComponentProps } from "../../interfaces/Topics";
import { useState } from "react";

function PostPage () {
  const params = useParams();
  const [windowWidth] = useState(document.documentElement.clientWidth)
  const [topicLiked, setTopicLiked] = useState(false)
  const location = useLocation().state as ITopicCardsComponentProps

  return (
    <Container>
      <ContainerHeader>
        <h1>{location.topicTitle}</h1>      
        <span>ID: {params.id}</span> 
      </ContainerHeader>
      <TopicContainer>
        <AvatarTopicContainer>
          <AvatarImage avatarSourceLink={location.avatarProps?.avatarSourceLink} avatarAltTitle={location.avatarProps?.avatarAltTitle} avatarTitle={location.avatarProps?.avatarTitle}/>
          <div>
            <p>{location.authorName}</p>
            <span>{location.groupName}</span>
          </div>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
          <div>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
          <HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>
          </div>
          <TopicDescriptionArea readOnly rows={10} value={location.topicDescription}/>
        </TopicDescriptionContainer>
      </TopicContainer>
      <TopicContainer>
        <AvatarTopicContainer>
          <AvatarImage />
          <div>
            <p>Nome Autor</p>
            <span>Nome Grupo</span>
          </div>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
        <div>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
            <HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>
          </div>
          <TopicDescriptionArea readOnly rows={10} value=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </TopicDescriptionContainer>
      </TopicContainer>
    </Container>
  )
}

export default PostPage