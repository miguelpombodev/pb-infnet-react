import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'


import IPosts from '../../interfaces/Posts';
import TopicCard from '../../components/TopicCard';
import { Container, GroupCardContainer, GroupCardList } from './style';
import CardSkeleton from '../../components/CardSkeleton';

function Posts () {
  const [data, setData] = useState<IPosts[]>([]);

  async function getApiData(): Promise<IPosts[]> {
    const response = await axios.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts")

    return response.data
  }

  useEffect(() => {
    async function fetchData() {
      const response = await getApiData()

      response.forEach(post => {
        post.likes_count = Math.floor(Math.random() * 101)
        post.comments_count = Math.floor(Math.random() * 101)
        return post
      });

      setTimeout(() => setData(response), 2000)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <GroupCardContainer>
      <h1>Todos os Tópicos</h1>
        <GroupCardList>
          {
            data.length > 0 ? (
              data.map(post => (
                <TopicCard 
                key={post.id} 
                topicId={uuidv4()}
                topicTitle={post.title} 
                topicDescription={post.body}
                likesQuantity={post.likes_count}
                commentsQuantity={post.comments_count}
                authorName='Author Example'
                groupName='Group Example'
                />
              ))
            ) : (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            )
          }
        </GroupCardList>
      </GroupCardContainer>
    </Container>
  )
}

export default Posts

