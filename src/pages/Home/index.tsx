import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'

import { Container, CreateNewTopicContainer, GroupCardContainer, GroupCardList, HeadingContainer, NewTopicButton, NewTopicContent, NewTopicForm, NewTopicTitle } from "./style"

import Modal from "../../components/Modal"
import TopicCard from "../../components/TopicCard"
import { ITopicInfos } from '../../interfaces/Topics'

function Home () {
  const [topics, setNewTopic] = useState<ITopicInfos[]>([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const topicTitle = useRef(null)
  const topicContent = useRef(null)

  function sendNewTopicSubmit(event: Event) {
    event.preventDefault()

    setNewTopic([...topics, {
      id: uuidv4(),
      topicTitle: topicTitle.current.value,
      topicDescription: topicContent.current.value,
      avatar_infos: {
        avatarSourceLink:"https://freepngimg.com/thumb/mario_bros/92438-mario-art-super-thumb-bros-download-free-image.png",
        avatarAltTitle: "avatar_alt_title",
        avatarTitle: "avatar_title"
      },
      comments_count: 0,
      likes_count: 0
    }])
    setModalIsOpen(false)
  }

  const getPostFromAPI = async () => {
    const response = await axios.get<ITopicInfos[]>('/posts.json')

    return response.data
  }

  useEffect(() => {
    async function fetchData () {
      const responseData = await getPostFromAPI()

      setNewTopic(responseData)
    }

    fetchData()
  })

  return (
    <Container>
      {modalIsOpen && 
        <Modal setIsOpen={setModalIsOpen}>
          <CreateNewTopicContainer>
          <h2>Novo Tópico</h2>
          <NewTopicForm onSubmit={(e) => sendNewTopicSubmit(e)}>
            <NewTopicTitle ref={topicTitle} type="text" placeholder="Mostre o que você está pensando!"/>
            <NewTopicContent ref={topicContent} placeholder="Mostre mais detalhes!"/>
            <NewTopicButton type="submit">Criar Tópico</NewTopicButton>
          </NewTopicForm>
        </CreateNewTopicContainer>
        </Modal>
      }
      <GroupCardContainer>
        <HeadingContainer>
          <h2>Topicos mais acessados</h2>
          <button onClick={() => setModalIsOpen(true)}>crie topico</button>
        </HeadingContainer>

        <GroupCardList>
        {
          topics.map(topic => (
            <TopicCard 
              key={topic.id} 
              topicTitle={topic.topicTitle} 
              topicDescription={topic.topicDescription}
              avatarProps={topic.avatar_infos}
              commentsQuantity={topic.comments_count}
              likesQuantity={topic.likes_count}
              />
          ))
        }
        </GroupCardList>
      </GroupCardContainer>
    </Container>
  )
}

export default Home