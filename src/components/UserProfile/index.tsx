import { useContext, useState } from "react"
import { FaRegTrashCan } from "react-icons/fa6";

import AvatarImage from "../AvatarImage"
import TopicCard from "../TopicCard"
import { AvatarContainer, Container, NoTopicsMessage, SingleTopicContainer, TopicsContainer, TopicsHeaderContainer, TopicsListContainer } from "./style"
import { TopicsContexts } from "../../context"

interface ILoggedUserProps {
  nickname: string;
  email: string,
  avatarPicture: string,
  group: string | null
}
function UserProfile (loggedUser: ILoggedUserProps) {
  const { userTopics, setUserTopics } = useContext(TopicsContexts)
  const [windowWidth] = useState(document.documentElement.clientWidth)

  function handleTopicDelete (topicId: string) {
      console.log(topicId)
      const newUserTopics = userTopics.filter(topic => topic.id != topicId)
      setUserTopics(newUserTopics)
  }
  
  return (
    <Container>
      <AvatarContainer>
        <AvatarImage avatarSourceLink={loggedUser.avatarPicture}/>
        <span>{loggedUser.nickname}</span>
        <span>{loggedUser.group}</span>
      </AvatarContainer>
      <TopicsContainer>
        <TopicsHeaderContainer>
          <h1>Perfil</h1>
        </TopicsHeaderContainer>
        <TopicsListContainer>
          {
            userTopics.length === 0 ? (
            <NoTopicsMessage>
              Você ainda não tem tópicos cadastrados
            </NoTopicsMessage> 
            ) : userTopics.map(topic => (
              <SingleTopicContainer>
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
                <FaRegTrashCan size={windowWidth > 979 ? 30 : 25} onClick={() => {handleTopicDelete(topic.id)}}/>
              </SingleTopicContainer>
            ))
          }

        </TopicsListContainer>
      </TopicsContainer>
    </Container>
  )
}

export default UserProfile