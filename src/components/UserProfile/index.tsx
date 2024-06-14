import { useContext } from "react"
import AvatarImage from "../AvatarImage"
import TopicCard from "../TopicCard"
import { AvatarContainer, Container, TopicsContainer, TopicsHeaderContainer, TopicsListContainer } from "./style"
import { TopicsContexts } from "../../context"

function UserProfile () {
  const { userTopics } = useContext(TopicsContexts)
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage />
        <span>Nome Usuario</span>
        <span>Grupo Usuario</span>
      </AvatarContainer>
      <TopicsContainer>
        <TopicsHeaderContainer>
          <h1>Perfil</h1>
        </TopicsHeaderContainer>
        <TopicsListContainer>
          {
            userTopics.map(topic => (
              <TopicCard 
              key={topic.id} 
              topicId={topic.id} 
              topicTitle={topic.topicTitle} 
              topicDescription={topic.topicDescription}
              avatarProps={topic.avatar_infos}
              commentsQuantity={topic.comments_count}
              likesQuantity={topic.likes_count}
              authorName={topic.authorName}
              groupName={topic.groupName}
              />
            ))
          }

        </TopicsListContainer>
      </TopicsContainer>
    </Container>
  )
}

export default UserProfile