import AvatarImage from "../AvatarImage"
import TopicCard from "../TopicCard"
import { AvatarContainer, Container, TopicsContainer, TopicsHeaderContainer, TopicsListContainer } from "./style"

function UserProfile () {
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
        <TopicCard 
              key="23123132-12313133"
              topicId="12313313-2012313"
              topicTitle="teste"
              topicDescription="teste"
              commentsQuantity={1}
              authorName="qweq"
              groupName="qeqeqweq"
              />
        </TopicsListContainer>
      </TopicsContainer>
    </Container>
  )
}

export default UserProfile