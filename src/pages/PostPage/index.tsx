import { AvatarBadge, AvatarTopicContainer, Container, ContainerHeader, TopicContainer, TopicDescriptionArea, TopicDescriptionContainer, TopicDescriptionDate } from "./style";
import AvatarImage from "../../components/AvatarImage";
import { useParams, useLocation } from "react-router-dom";
import { ITopicCardsComponentProps } from "../../interfaces/Topics";

function PostPage () {
  const params = useParams();
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
          <p>Nome Autor</p>
          <span>Nome Grupo</span>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
          <TopicDescriptionArea readOnly rows={10} value={location.topicDescription}/>
        </TopicDescriptionContainer>
      </TopicContainer>
      <TopicContainer>
        <AvatarTopicContainer>
          <AvatarImage />
          <p>Nome Autor</p>
          <span>Nome Grupo</span>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
          <TopicDescriptionArea readOnly rows={10} value=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        </TopicDescriptionContainer>
      </TopicContainer>
    </Container>
  )
}

export default PostPage