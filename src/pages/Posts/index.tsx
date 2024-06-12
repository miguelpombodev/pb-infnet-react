import { useState, useEffect } from 'react';
import axios from 'axios';
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
      setTimeout(() => setData(response), 2000)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <GroupCardContainer>
        <GroupCardList>
          {
            data.length > 0 ? (
              data.map(post => (
                <TopicCard 
                key={post.id} 
                topicTitle={post.title} 
                topicDescription={post.body}
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

